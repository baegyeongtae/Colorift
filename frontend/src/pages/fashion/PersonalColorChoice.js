import styled from 'styled-components';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { Footer } from '../../components';

function PersonalColorChoice() {
    return (
        <>
            <ContainerDiv>
                <div className="wrapper">
                    <div className="current_circle">
                        <TextH2>
                            퍼스널 컬러 <br /> 선택
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            패션 사진 <br /> 업로드
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            퍼스널컬러와
                            <br /> 비교 매칭
                        </TextH2>
                    </div>
                    <div className="left_circle">
                        <TextH2>
                            패션 매칭
                            <br /> 결과
                        </TextH2>
                    </div>
                </div>
            </ContainerDiv>

            <ContainerDiv>
                <TextH1>
                    매칭하고 싶은 퍼스널 컬러를 <br /> 아래 3가시 방법 중 선택해주세요.
                </TextH1>
            </ContainerDiv>

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
                                <Typography variant="headline" component="h4">
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
                                <Typography variant="headline" component="h4">
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
                                <Typography variant="headline" component="h4">
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
                    </RadioGroup>
                </FormControl>
            </RadioDiv>

            <ContainerDiv>
                <CustomButton2>다음으로</CustomButton2>
            </ContainerDiv>

            <Footer />
        </>
    );
}

export { PersonalColorChoice };

const ContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 50px;
    }
    .wrapper {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
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
        width: 68px;
        height: 68px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
        text-align: center;
    }

    .left_circle {
        width: 68px;
        height: 68px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.lightgray};
        text-align: center;
    }

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const RadioDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 28px;
        margin-right: 28px;
    }

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const SelectDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        .select {
            width: 100px;
            height: 30px;
            padding-left: 5px;
            font-size: ${({ theme }) => theme.fontSizes.smalltext};
            border: 2px solid #333;
            background-color: #fff;
            border-radius: 3px;
        }

        .select:focus {
            border-color: #c4c4c4;
        }
    }

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const MyPersonalColorDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        vertical-align: middle;

        margin-left: 28px;
        margin-right: 28px;
    }

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        text-align: center;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        color: white;
        margin-top: 20px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH3 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        color: ${({ theme }) => theme.color.darkgray};
        margin-bottom: 20px;
        margin-left: 30px;
        line-height: 20px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ResultText = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        color: black;
        margin-bottom: 30px;
        text-align: center;
        vertical-align: middle;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
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
`;

const CustomButton2 = styled('span')`
    @media ${({ theme }) => theme.device.mobile} {
        font-weight: bold;
        font-size: 0.875rem;
        background-color: ${({ theme }) => theme.color.white};
        padding: 5px 20px;
        border-style: solid;
        border-width: 2px;
        color: ${({ theme }) => theme.color.blue};
        transition: all 150ms ease;
        cursor: pointer;
    }
`;
