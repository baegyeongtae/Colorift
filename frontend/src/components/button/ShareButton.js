import { useScript } from '../../utils/hooks/useScript';
import { KakaoShareButton } from './KakaoShareButton';

export function ShareButton({ id, path }) {
    useScript('https://developers.kakao.com/sdk/js/kakao.js');

    return (
        <div className="sharebutton">
            <KakaoShareButton id={id} path={path} />
        </div>
    );
}
