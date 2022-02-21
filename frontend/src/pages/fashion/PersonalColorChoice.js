import styled from 'styled-components';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { Footer, ContainerDiv } from '../../components';

function PersonalColorChoice() {
    return (
        <>
            <CircleContainerDiv>
                <div className="wrapper">
                    <div className="current_circle">
                        <TextH0>
                            퍼스널 컬러 <br /> 선택
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            패션 사진 <br /> 업로드
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            퍼스널컬러와
                            <br /> 비교 매칭
                        </TextH0>
                    </div>
                    <div className="left_circle">
                        <TextH0>
                            패션 매칭
                            <br /> 결과
                        </TextH0>
                    </div>
                </div>
            </CircleContainerDiv>

            <TextH1>
                매칭하고 싶은 퍼스널 컬러를 <br /> 아래 3가지 방법 중 선택해주세요.
            </TextH1>

            <RadioDiv>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="none"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="basic"
                            control={<Radio size="small" />}
                            className="radio_label"
                            label={
                                <Typography variant="headline" className="component">
                                    {' '}
                                    <Box fontWeight="fontWeightBold" display="inline">
                                        기본 퍼스널 컬러
                                    </Box>{' '}
                                </Typography>
                            }
                        />
                        <TextH3>
                            기본으로 지정된 봄 웜톤 / 여름 쿨톤 / 가을 웜톤 / 겨울 쿨톤 중 선택 1 정확도가 떨어질 수
                            있습니다.
                        </TextH3>

                        <SelectDiv>
                            <select name="personalcolor" className="select">
                                <option value="spring">봄 웜톤</option>
                                <option value="summer">여름 쿨톤</option>
                                <option value="fall">가을 웜톤</option>
                                <option value="winter">겨울 쿨톤</option>
                            </select>
                        </SelectDiv>

                        <FormControlLabel
                            value="previous"
                            className="radio_label"
                            control={<Radio size="small" />}
                            label={
                                <Typography variant="headline" className="component">
                                    {' '}
                                    <Box fontWeight="fontWeightBold" display="inline">
                                        직전에 분석한 퍼스널 컬러
                                    </Box>{' '}
                                </Typography>
                            }
                        />
                        <TextH3>퍼스널 컬러 결과 페이지에서 ‘패션 매칭하기’ 버튼을 클릭해야 합니다.</TextH3>

                        <ResultText>직전에 분석한 자료가 없습니다.</ResultText>

                        <FormControlLabel
                            value="my"
                            control={<Radio size="small" />}
                            className="radio_label"
                            label={
                                <Typography variant="headline" className="component">
                                    {' '}
                                    <Box fontWeight="fontWeightBold" display="inline">
                                        마이 퍼스널 컬러
                                    </Box>{' '}
                                </Typography>
                            }
                        />
                        <TextH3>로그인 유저는 기존에 저장한 퍼스널 컬러로 매칭할 수 있습니다.</TextH3>

                        <MyPersonalColorDiv>
                            <ResultText>선택안함</ResultText>
                            <CustomButton1>불러오기</CustomButton1>
                        </MyPersonalColorDiv>

                        {/* <ChoiceContainerDiv></ChoiceContainerDiv> */}
                    </RadioGroup>
                </FormControl>
            </RadioDiv>

            <ButtonContainerDiv>
                <CustomButton2>다음으로</CustomButton2>
            </ButtonContainerDiv>
            <Footer />
        </>
    );
}

export { PersonalColorChoice };

const CircleContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 120px;
    color: white;

    .wrapper {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 7px;
        padding-left: 30px;
        padding-right: 30px;
    }

    .wrapper::before {
        content: '';
        width: 70%;
        height: 5px;
        background-color: ${({ theme }) => theme.color.lightgray};
        position: absolute;
        top: 50%;
        left: 100;
    }

    .current_circle {
        width: 130px;
        height: 130px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
        text-align: center;
    }

    .left_circle {
        width: 130px;
        height: 130px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.lightgray};
        text-align: center;
    }

    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 50px;
        margin-top: 100px;
        color: white;

        .wrapper {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 7px;
            padding-left: 30px;
            padding-right: 30px;
        }
        .wrapper::before {
            content: '';
            width: 50%;
            height: 2px;
            background-color: ${({ theme }) => theme.color.lightgray};
            position: absolute;
            top: 50%;
            left: 100;
        }
        .current_circle {
            all: unset;

            width: 63px;
            height: 63px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
            text-align: center;
        }
        .left_circle {
            all: unset;

            width: 65px;
            height: 65px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.lightgray};
            text-align: center;
        }
    }
`;

const RadioDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 28px;
        margin-right: 28px;
    }

    .component {
        @media ${({ theme }) => theme.device.mobile} {
            font-size: ${({ theme }) => theme.fontSizes.smalltext};
        }
        font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    }
    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const SelectDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    .select {
        @media ${({ theme }) => theme.device.mobile} {
            margin-top: 20px;
            width: 80px;
            height: 20px;
            padding-left: 5px;
            font-size: ${({ theme }) => theme.fontSizes.mobiletext};
            font-weight: bold;
            border: 2px solid #333;
            background-color: #fff;
            border-radius: 3px;
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

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const MyPersonalColorDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    vertical-align: middle;

    margin-left: 28px;
    margin-right: 28px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ButtonContainerDiv = styled(ContainerDiv)`
    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        vertical-align: middle;
        margin-top: 50px;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 100px;
`;

const FooterContainerDiv = styled.div`
    position: absolute;
    bottom: -100;
`;

const TextH0 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 20px;
    }
    margin-top: 38px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        margin: 30px;
    }
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    font-weight: bold;
    text-align: center;
    margin: 20px;
    margin-bottom: 80px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH3 = styled.h3`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 1px;
        font-weight: bold;
        align-items: left;
        color: ${({ theme }) => theme.color.darkgray};
    }
    font-size: ${({ theme }) => theme.fontSizes.smalltext};
    margin-top: 1px;
    align-items: left;
    color: ${({ theme }) => theme.color.darkgray};
`;

const CustomButton1 = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 0.7em;
        background-color: #2c2c2c;
        padding: 5px 15px;
        border-radius: 8px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        border: none;
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

const CustomButton2 = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        font-weight: bold;
        font-size: 0.875rem;
        background-color: ${({ theme }) => theme.color.white};
        padding: 12px 20px;
        border-style: solid;
        border-width: 2px;
        color: ${({ theme }) => theme.color.blue};
        transition: all 150ms ease;
        cursor: pointer;
    }
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.color.white};
    padding: 12px 20px;
    border-style: solid;
    border-width: 2px;
    color: ${({ theme }) => theme.color.blue};
    transition: all 150ms ease;
    cursor: pointer;
    width: 170px;
    text-align: center;
`;

const ResultText = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        color: black;
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
        vertical-align: middle;
    }
    font-size: 1rem;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 50px;
    text-align: center;
    vertical-align: middle;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
