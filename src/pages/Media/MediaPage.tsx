import Navpanel from '@/widgets/Navpanel/Navpanel';
import { PhotoGallery } from './ui/PhotoGallery/PhotoGallery';
import { VideoGallery } from './ui/VideoGallery/VideoGallery';
import { useTranslation } from 'react-i18next';
export function MediaPage() {
    const {t, i18n} = useTranslation()
    return (
        <div>
            <Navpanel text={t('media.home')} link='/' text2={t('media.media')}/>
            <PhotoGallery />
            <VideoGallery />
        </div>
    );
}
