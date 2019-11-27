import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {Title} from '../SectionTitleStyle';
import ContainerWrapper from '../ContainerWrapper'
// import {Button, ButtonWrapper} from '../SmallButton/SmallButtonStyles';
import Button from '../SmallButton/SmallButton';

const Container = styled.div`
    padding-top: 17vh;
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-top: 20px;
    position: relative;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Mail = styled.h3 `
    font-size: 2em;
    margin: 5px 0 25px;
`

const Input = styled.input `
    height: 50px;
    margin: 0 0 10px;
    padding: 0 10px;
`

const Textarea = styled.textarea `
    margin: 0 0 10px;
    padding: 10px;
    font-size: 13.3px;
    resize: none;
    height: 25vh;
`

const ButtonContainer = styled.div`
    align-self: flex-end;
`

const LeftSide = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    padding-bottom: 40px;
`

const ContactTitle = styled(Title) `
    align-self: center;
` 

export default forwardRef((props, ref) => (
    <ContainerWrapper>
        <Container ref={ref}>
            <LeftSide>
                <ContactTitle>Contact</ContactTitle>
                <span>happydoomsday &copy; {new Date().getFullYear()}</span>
            </LeftSide>
            <FormWrapper>
                <p>Feel free to contact us by contact form or e-mail:</p>
                <Mail>team@happydoomsday.com</Mail>
                <Form>
                    <Input type="text" value="" placeholder="Title" />
                    <Input type="email" value="" placeholder="E-mail" />
                    <Textarea placeholder="Message" ></Textarea>
                </Form>
                <ButtonContainer>
                    <Button>Send message</Button>
                </ButtonContainer>
            </FormWrapper>
        </Container>
    </ContainerWrapper>
))