import { useScript } from '../../utils/hooks/useScript';
import { KakaoShareButton } from './KakaoShareButton';

export function ShareButton({ id, path, springRate, summerRate, autumnRate, winterRate, result }) {
    useScript('https://developers.kakao.com/sdk/js/kakao.js');

    return (
        <div className="sharebutton">
            <KakaoShareButton
                id={id}
                path={path}
                springRate={springRate}
                summerRate={summerRate}
                autumnRate={autumnRate}
                winterRate={winterRate}
                result={result}
            />
        </div>
    );
}
