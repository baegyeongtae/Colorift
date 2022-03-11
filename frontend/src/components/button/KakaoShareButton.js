/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { kakaoIcon, logoIcon } from '../../image';
import { ContainerDiv } from '../area';

export function KakaoShareButton({ id }) {
    const createKakaoButton = _id => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao;
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }
            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: 'ColorFit',
                    description: '퍼스널 컬러 분석과 패션 매칭으로 완벽한 하루를 보내세요!',
                    imageUrl: `${logoIcon}`, // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: `http://localhost:3000/share/color/${_id}`,
                        webUrl: `http://localhost:3000/share/color/${_id}`,
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
                            mobileWebUrl: `http://localhost:3000/share/color/${_id}`,
                            webUrl: `http://localhost:3000/share/color/${_id}`,
                        },
                    },
                ],
                itemContent: {
                    titleImageText: '누구님의 퍼스널 컬러는',
                    titleImageCategory: '봄 웜톤 입니다.',
                    items: [
                        {
                            item: '봄 웜톤',
                            itemOp: '80%',
                        },
                        {
                            item: '여름 쿨톤',
                            itemOp: '10%',
                        },
                        {
                            item: '가을 웜톤',
                            itemOp: '7%',
                        },
                        {
                            item: '겨울 쿨톤',
                            itemOp: '3%',
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

        cursor: pointer;

        @media ${({ theme }) => theme.device.mobile} {
            width: 30px;
        }
    }
`;
