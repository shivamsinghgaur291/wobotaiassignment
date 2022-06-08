import React from "react";
import styled from "styled-components";
export const Root1 = ({}) => {
return (
<RootRoot>
<Element1>
<PeriwinkleRectangle />
<BlueRectangle />
<Content>
<Header>
<Heading>
<Solidlines>
<BlueRectangle1 />
<BlueRectangle2 />
<BlueRectangle3 />
</Solidlines>
<Text1>It’s a delight to have you onboard</Text1>
</Heading>
<Paragraph>
Help us know you better.
<br />
(This is how we optimize Wobot as per your business needs)
</Paragraph>
</Header>
<FormFields>
<InputField padding={"0"}>
<FieldLabel>Company name</FieldLabel>
<Box>
<PlaceholderText placeholder={"e.g. Example Inc"} />
</Box>
</InputField>
<InputField padding={"0"}>
<FieldLabel>Industry</FieldLabel>
<Box1>
<Text2>Select</Text2>
<Polygon
src={"https://file.rendit.io/n/cqaXd9cqHI9UVsMYIx6e.svg"}
/>
</Box1>
</InputField>
<InputField padding={"0px 23px 0px 0px"}>
<FieldLabel>Company size</FieldLabel>
<Options>
<TagContent margin={"0px 13px 0px 0px"}>1-20</TagContent>
<TagContent margin={"0px 8px 0px 0px"}>21-50</TagContent>
<TagContent2>51-200</TagContent2>
<TagContent margin={"0px 6px 0px 0px"}>201-500</TagContent>
<TagContent margin={"0"}>500+</TagContent>
</Options>
</InputField>
</FormFields>
<ClickMe>Get Started</ClickMe>
</Content>
</Element1>
<Text3>Terms of Use | Privacy Policy</Text3>
</RootRoot>
);
};
const RootRoot = styled.div`
height: 1006px;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 115.6px;
margin: auto;
min-width: 1685.11px;
align-items: center;
padding: 0px 73.89px 0px 0px;
`;
const Element1 = styled.div`
height: 616.4px;
position: relative;
min-width: 1685.11px;
`;
const PeriwinkleRectangle = styled.div`
width: 769px;
height: 13.4px;
transform-origin: 0px 0px;
transform: rotate(-30deg);
background-color: #e0e8fc;
position: absolute;
top: 603px;
`;
const BlueRectangle = styled.div`
width: 769px;
height: 13.4px;
transform-origin: 0px 0px;
transform: rotate(-30deg);
background-color: rgba(55, 102, 232, 0.2);
position: absolute;
top: 544px;
left: 916.11px;
`;
const Content = styled.div`
box-shadow: 4px 4px 20px 0px rgba(157, 157, 157, 0.12);
background-color: #ffffff;
display: flex;
overflow: hidden;
flex-direction: column;
gap: 24px;
justify-content: flex-start;
align-items: flex-start;
position: absolute;
left: 564.11px;
border-radius: 15px;
padding: 40px 91px;
`;
const Header = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
justify-content: flex-start;
align-items: center;
`;
const Heading = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
justify-content: flex-start;
align-items: center;
align-self: stretch;
min-width: 378px;
`;
const Solidlines = styled.div`
width: 51px;
height: 36.52px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 5.74px 0px;
`;
const BlueRectangle1 = styled.div`
width: 11px;
height: 27.8px;
transform-origin: 0px 0px;
transform: rotate(-31.3deg);
background-color: #3766e8;
border-radius: 100px;
margin: 0px 0.89px 0px 0px;
`;
const BlueRectangle2 = styled.div`
width: 11px;
height: 42.4px;
transform-origin: 0px 0px;
transform: rotate(-31.3deg);
background-color: #3766e8;
border-radius: 100px;
margin: 0px 7.67px 0px 0px;
`;
const BlueRectangle3 = styled.div`
width: 11px;
height: 21.5px;
transform-origin: 0px 0px;
transform: rotate(-31.3deg);
background-color: #3766e8;
align-self: flex-start;
border-radius: 100px;
`;
const Text1 = styled.div`
text-align: center;
font-size: 26px;
font-family: Roboto;
font-weight: 500;
color: #212121;
align-self: stretch;
min-width: 378px;
`;
const Paragraph = styled.div`
text-align: center;
width: 378px;
font-size: 14px;
font-family: Roboto;
font-weight: 400;
line-height: 18.4px;
color: #545454;
`;
const FormFields = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
justify-content: flex-start;
align-items: flex-start;
`;
const Box = styled.div`
background-image: url("https://file.rendit.io/n/8RJgmNx0rXrKTQsefV6c.svg");
background-size: cover;
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 14px 10px 10px;
`;
const PlaceholderText = styled.input`
width: 344px;
font-size: 14px;
font-family: Roboto;
font-weight: 400;
line-height: 18.4px;
color: #a0a0a0;
padding: 0px;
border-width: 0px;
background: none;
:: placeholder {
color: #a0a0a0;
}
display: inline-block;
outline-width: 0px;
`;
const Box1 = styled.div`
background-image: url("https://file.rendit.io/n/CnJ5dqjYPeyZtoYCcJw9.svg");
background-size: cover;
display: flex;
flex-direction: row;
gap: 16px;
align-items: center;
padding: 7px 14px 10px 10px;
`;
const Text2 = styled.div`
width: 320px;
font-size: 14px;
font-family: Roboto;
font-weight: 400;
line-height: 18.4px;
color: #a0a0a0;
`;
const Polygon = styled.img`
width: 8px;
height: 6px;
align-self: flex-start;
margin: 6px 0px 0px 0px;
`;
const Options = styled.div`
width: 329px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const TagContent2 = styled.div`
text-align: center;
display: flex;
font-size: 14px;
font-family: Inter;
font-weight: 500;
color: #ffffff;
background-color: #3766e8;
flex-direction: row;
gap: 8px;
justify-content: center;
align-items: center;
border-radius: 2px;
padding: 4px 8px;
margin: 0px 7px 0px 0px;
`;
const ClickMe = styled.div`
text-align: center;
display: flex;
font-size: 14px;
font-family: Roboto;
font-weight: 500;
color: #ffffff;
width: 368px;
background-color: #3766e8;
flex-direction: row;
gap: 8px;
justify-content: center;
align-items: center;
border-radius: 5px;
padding: 10px 40px;
`;
const Text3 = styled.div`
font-size: 14px;
font-family: Roboto;
font-weight: 400;
line-height: 18.4px;
color: #545454;
`;
const InputField = styled.div`
height: 82px;
display: flex;
overflow: hidden;
flex-direction: column;
justify-content: flex-start;
gap: 8px;
align-items: center;
padding: ${(props) => props.padding};
`;
const FieldLabel = styled.div`
font-size: 14px;
font-family: Inter;
font-weight: 500;
color: #545454;
align-self: flex-start;
`;
const TagContent = styled.div`
text-align: center;
display: flex;
font-size: 14px;
font-family: Inter;
font-weight: 500;
color: #545454;
background-color: #f0f0f0;
flex-direction: row;
gap: 8px;
justify-content: center;
align-items: center;
border-radius: 2px;
padding: 4px 8px;
margin: ${(props) => props.margin};
`;