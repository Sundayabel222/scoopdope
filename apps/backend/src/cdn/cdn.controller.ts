import { Controller, Post, Get, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import { CdnService } from './cdn.service';
import { ContentType } from './cdn-asset.entity';

@Controller('v1/cdn')
@UseGuards(JwtAuthGuard)
export class CdnController {
  constructor(private cdnService: CdnService) {}

  @Post('upload')
  @UseGuards(RolesGuard)
  @Roles('admin', 'instructor')
  async uploadAsset(
    @Body() data: any,
    @CurrentUser() user: { id: string },
  ) {
    return this.cdnService.uploadAsset({
      lessonId: data.lessonId,
      fileName: data.fileName,
      originalName: data.originalName ?? data.fileName,
      mimeType: data.mimeType,
      contentType: data.contentType as ContentType,
      fileSize: data.fileSize,
      uploadedByUserId: user.id,
      isPrivate: data.isPrivate ?? true,
    });
  }

  @Get(':assetId/signed-url')
  async getSignedUrl(
    @Param('assetId') assetId: string,
    @Query('expirationMinutes') expirationMinutes?: string,
  ) {
    const signedUrl = await this.cdnService.generateSignedUrl(
      assetId,
      expirationMinutes ? parseInt(expirationMinutes, 10) : 60,
    );
    return { signedUrl };
  }

  @Post(':assetId/transcode')
  @UseGuards(RolesGuard)
  @Roles('admin')
  async markTranscoded(@Param('assetId') assetId: string, @Body() data: any) {
    return this.cdnService.markAsTranscoded(assetId, data.bitrates, data.thumbnailUrl);
  }

  @Post(':assetId/invalidate')
  @UseGuards(RolesGuard)
  @Roles('admin')
  async invalidateCache(@Param('assetId') assetId: string) {
    return this.cdnService.invalidateCache(assetId);
  }

  @Get('lesson/:lessonId')
  async getLessonAssets(@Param('lessonId') lessonId: string) {
    return this.cdnService.getLessonAssets(lessonId);
  }

  @Get(':assetId')
  async getAsset(@Param('assetId') assetId: string) {
    return this.cdnService.getAsset(assetId);
  }
}
