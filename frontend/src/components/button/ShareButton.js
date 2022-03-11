import { useScript } from '../../utils/hooks/useScript';
import { KakaoShareButton } from './KakaoShareButton';

export function ShareButton({ id }) {
    useScript('https://developers.kakao.com/sdk/js/kakao.js');

    return (
        <div className="sharebutton">
            <KakaoShareButton id={id} />
        </div>
    );
}
