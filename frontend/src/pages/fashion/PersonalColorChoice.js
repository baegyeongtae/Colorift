import { useState, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
    ContainerDiv,
    Fashion,
    MediumTextH,
    WhiteButton,
    RadioTextH,
    MyPersonalListModal,
    NavBackgroundDiv,
    TextModal,
} from '../../components';
import { fashionPageState } from '../../utils/data/atom';

function PersonalColorChoice() {
    // 로그인 여부 확인
    const loggedUser = sessionStorage.getItem('userId');

    // 리스트 보기 모달
    const [listModal, setListModal] = useState(false);

    // 선택한 색상이 없을 때 다음으로 버튼 막는 모달
    const [nextDisabledModal, setNextDisabledModal] = useState(false);

    // 리스트에서 받아온 컬러 선택값
    const [myPersonalColor, setMyPersonalColor] = useState('선택안함');

    // Radio Button Select
    const [select, setSelect] = useState('');
    const handleSelectChange = event => {
        const { value } = event.target;
        setSelect(value);
        sessionStorage?.removeItem('color');
    };

    // Next Page로 넘기기
    const setFashionPage = useSetRecoilState(fashionPageState);

    // 기본 퍼스널 컬러에서 유저가 선택한 색상
    const [selectColor, setSelectColor] = useState('');

    // 기본 퍼스널 컬러 select 선택 시 컬러 저장
    const onChangeSelect = e => {
        sessionStorage.setItem('color', e.target.value);
        setSelectColor(e.target.value);
    };

    // 컬러 페이지 검사 결과 받아오기 & 세션 스토리지에 넣기
    const seasonTone = sessionStorage.getItem('season');
    const season = {
        SP: '봄 웜톤',
        SU: '여름 쿨톤',
        AU: '가을 웜톤',
        WI: '겨울 쿨톤',
    };

    const checkedColor = () => {
        if (seasonTone) {
            if (select === 'previous') {
                sessionStorage.setItem('color', seasonTone);
            }
            if (seasonTone === 'SP') {
                return season.SP;
            }
            if (seasonTone === 'SU') {
                return season.SU;
            }
            if (seasonTone === 'AU') {
                return season.AU;
            }
            if (seasonTone === 'WI') {
                return season.WI;
            }
        }
        return `직전에 분석한 자료가 없습니다.`;
    };

    const checkedColorText = useMemo(() => checkedColor(), [seasonTone, select]);

    // 불러오기 클릭 시 모달 토글 함수 + 선택한 마이퍼스널컬러 가져오기
    const handleToggleClick = () => {
        setListModal(current => !current);
    };

    // 마이퍼스널 목록에서 확인 버튼 눌렀을 때
    const handleCheckClick = ({ chosenColor }) => {
        setMyPersonalColor(chosenColor);
        handleToggleClick();
    };

    // 다음으로 클릭 시 선택한 색상이 없을 때 모달 토글 함수
    const handleNextDisabled = () => {
        setNextDisabledModal(current => !current);
    };

    // 다음으로 버튼 클릭 함수
    const handleNextButton = () => {
        if (!sessionStorage.getItem('color')) {
            setNextDisabledModal(true);
        } else {
            setFashionPage(1);
        }
    };

    return (
        <>
            {loggedUser ? (
                <MyPersonalListModal
                    className={listModal && 'show'}
                    toggleProps={handleToggleClick}
                    checkProps={handleCheckClick}
                />
            ) : (
                <TextModal
                    text="로그인 이후 이용해주세요."
                    toggleProps={handleToggleClick}
                    className={listModal && 'show'}
                />
            )}
            {nextDisabledModal && (
                <TextModal
                    text="색상을 선택해주세요."
                    toggleProps={handleNextDisabled}
                    className={nextDisabledModal && 'show'}
                />
            )}

            <NavBackgroundDiv />
            <Fashion />

            <MediumTextH>매칭하고싶은 퍼스널 컬러를 아래 3가지 방법 중 선택해주세요.</MediumTextH>

            <ChoiceContainerDiv>
                <div>
                    <Item>
                        <RadioButton
                            type="radio"
                            name="radio"
                            value="basic"
                            checked={select === 'basic'}
                            onChange={event => handleSelectChange(event)}
                        />
                        <RadioButtonLabel />
                        <RadioTextH>기본 퍼스널 컬러</RadioTextH>
                    </Item>
                    <TextH3>
                        기본으로 지정된 봄 웜톤 / 여름 쿨톤 / 가을 웜톤 / 겨울 쿨톤 중 선택 1 정확도가 떨어질 수
                        있습니다.
                    </TextH3>
                </div>
                <div>
                    <SelectDiv>
                        <select
                            name="personalcolor"
                            className="select"
                            value={selectColor}
                            disabled={select !== 'basic'}
                            onChange={onChangeSelect}
                        >
                            <option value="">선택안함</option>
                            <option value="SP">봄 웜톤</option>
                            <option value="SU">여름 쿨톤</option>
                            <option value="AU">가을 웜톤</option>
                            <option value="WI">겨울 쿨톤</option>
                        </select>
                    </SelectDiv>
                </div>
                <div>
                    <Item>
                        <RadioButton
                            type="radio"
                            name="radio"
                            value="previous"
                            checked={select === 'previous'}
                            onChange={event => handleSelectChange(event)}
                        />
                        <RadioButtonLabel />
                        <RadioTextH>직전에 분석한 퍼스널 컬러</RadioTextH>
                    </Item>
                    <TextH3>회원님이 직전에 분석한 퍼스널 컬러 결과입니다.</TextH3>
                </div>
                <div>
                    <ResultText>{checkedColorText}</ResultText>
                </div>
                <div>
                    <Item>
                        <RadioButton
                            type="radio"
                            name="radio"
                            value="my"
                            checked={select === 'my'}
                            onChange={event => handleSelectChange(event)}
                        />
                        <RadioButtonLabel />
                        <RadioTextH>마이 퍼스널 컬러</RadioTextH>
                    </Item>
                    <TextH3>로그인 유저는 기존에 저장한 퍼스널 컬러로 매칭할 수 있습니다.</TextH3>
                </div>
                <div>
                    <MyPersonalColorDiv>
                        <ResultText>{myPersonalColor}</ResultText>
                        <CustomButton disabled={select !== 'my'} onClick={handleToggleClick}>
                            불러오기
                        </CustomButton>
                    </MyPersonalColorDiv>
                </div>
            </ChoiceContainerDiv>

            <ButtonContainerDiv>
                <WhiteButton type="submit" onClick={handleNextButton}>
                    다음으로
                </WhiteButton>
            </ButtonContainerDiv>
        </>
    );
}

export { PersonalColorChoice };

const ChoiceContainerDiv = styled(ContainerDiv)`
    width: 850px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: left;
    margin-bottom: 50px;
    margin-top: 80px;

    @media ${({ theme }) => theme.device.mobile} {
        width: 270px;
        height: 400px;
        position: relative;
        ${({ theme }) => theme.flexStyled.flexColumn};
        align-items: center;
        margin-top: 40px;
        margin-left: 60px;
        margin-bottom: 30px;
    }
`;

const Item = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;

    @media ${({ theme }) => theme.device.mobile} {
        height: 30px;
    }
`;

const RadioButtonLabel = styled.label`
    position: absolute;
    top: 25%;
    left: 4px;
    width: 24px;
    height: 24px;
    border: 1px solid #bebebe;
    border-radius: 50%;

    @media ${({ theme }) => theme.device.mobile} {
        width: 12px;
        height: 12px;
    }
`;

const RadioButton = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-right: 10px;

    &:hover ~ ${RadioButtonLabel} {
        background: #bebebe;
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin: 5px;
            background: white;
        }
    }
    ${props =>
        props.checked &&
        ` 
    &:checked + ${RadioButtonLabel} {
      border: 1px solid #3C64B1;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: #3C64B1;
      }

    }
  `}

    @media ${({ theme }) => theme.device.mobile} {
        width: 6px;
        height: 6px;

        ${props =>
            props.checked &&
            ` 
        &:checked + ${RadioButtonLabel} {
          &::after {
            width: 6px;
            height: 6px;
            margin: 2px;
          }
        }
      `}
    }
`;

const SelectDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
    align-items: center;
    margin-bottom: 20px;

    .select {
        @media ${({ theme }) => theme.device.mobile} {
            margin-top: 20px;
            width: 80px;
            height: 20px;
            padding-left: 5px;
            font-size: ${({ theme }) => theme.fontSizes.mobiletext};
            font-weight: bold;
            border-color: #333;
        }

        margin-top: 30px;
        margin-bottom: 20px;
        width: 130px;
        height: 30px;
        padding-left: 25px;
        font-size: 0.75rem;
        border: 2px solid #373f41;
        background-color: #fff;
        border-radius: 3px;
        font-weight: 1000;
    }

    .select:focus {
        border-color: #c4c4c4;
    }
`;

const MyPersonalColorDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-evenly;
    align-items: center;

    margin-left: 28px;
    margin-right: 28px;

    @media ${({ theme }) => theme.device.mobile} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: left;
    }
`;

const ButtonContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexColumn};
    justify-content: flex-start;
    align-items: center;

    height: 15vh;

    @media ${({ theme }) => theme.device.mobile} {
        height: 12vh;
    }
`;

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        font-weight: bold;
        margin-left: 30px;
    }

    margin-left: 50px;
    font-size: ${({ theme }) => theme.fontSizes.smalltext};
    align-items: left;
    color: ${({ theme }) => theme.color.darkgray};
`;

const CustomButton = styled.button`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 0.7em;
        padding: 5px 15px;
    }

    font-size: 1rem;
    background-color: #2c2c2c;
    padding: 5px 25px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
`;

const ResultText = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        margin-top: 30px;
        margin-bottom: 30px;
    }
    font-size: 1rem;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 50px;
    text-align: center;
`;
