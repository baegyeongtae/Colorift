/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { kakaoIcon, logoIcon } from '../../image';
import { ContainerDiv } from '../area';

export function KakaoShareButton({ id, path, season, springRate, summerRate, autumnRate, winterRate, result }) {
    const [pathname, setPathname] = useState('');
    setPathname(path);
    const createKakaoButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao;
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }

            const titleCategory = () => {
                if (pathname === '/color/') '퍼스널 컬러는';
                if (pathname === '/fashion/') '패션매칭 결과는';
            };
            const mood = result === 'G' ? 'Good' : result === 'S' ? 'So So' : 'Bad';
            const titleDescription = () => {
                if (pathname === '/color/') `${season} 입니다.`;
                if (pathname === '/fashion/') mood;
            };
            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: 'ColorFit',
                    description: '퍼스널 컬러 분석과 패션 매칭으로 완벽한 하루를 보내세요!',
                    imageUrl: `${logoIcon}`, // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: `http://localhost:3000/share${path}${id}`,
                        webUrl: `http://localhost:3000/share${path}${id}`,
                    },
                },
                social: {
                    likeCount: 9999,
                    commentCount: 9999,
                    sharedCount: 333,
                },
                buttons: [
                    {
                        title: '자세히 보기',
                        link: {
                            mobileWebUrl: `http://localhost:3000/share${path}${id}`,
                            webUrl: `http://localhost:3000/share${path}${id}`,
                        },
                    },
                ],
                itemContent: {
                    titleImageText: `회원님의 ${titleCategory}`,
                    titleImageCategory: { titleDescription },
                    items: [
                        {
                            item: '봄 웜톤',
                            itemOp: `${springRate}%`,
                        },
                        {
                            item: '여름 쿨톤',
                            itemOp: `${summerRate}%`,
                        },
                        {
                            item: '가을 웜톤',
                            itemOp: `${autumnRate}%`,
                        },
                        {
                            item: '겨울 쿨톤',
                            itemOp: `${winterRate}%`,
                        },
                    ],
                },
            });
        }
    };
    useEffect(() => {
        createKakaoButton(id);
    }, []);
    return (
        <button id="kakao-link-btn">
            <KakaoiconDiv>
                <img src={kakaoIcon} alt="kakao-share-icon" />
            </KakaoiconDiv>
        </button>
    );
}

const KakaoiconDiv = styled(ContainerDiv)`
    img {
        width: 50px;

        @media ${({ theme }) => theme.device.mobile} {
            width: 30px;
        }
    }
`;
