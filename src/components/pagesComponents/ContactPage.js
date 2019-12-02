import React, { Component } from 'react'
import styled from 'styled-components';
import {Title} from '../SectionTitleStyle';
import ContainerWrapper from '../ContainerWrapper'
// import {Button, ButtonWrapper} from '../SmallButton/SmallButtonStyles';
import Button from '../SmallButton/SmallButton';
import {Cyan, Magenta} from '../../Colors';

const Container = styled.div`
    padding-top: 17vh;
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 850px) {
        grid-template-columns: 1fr;
    }
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-top: 20px;
    position: relative;

    @media(max-width: 850px) {
        padding: 0 40px;
    }
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

const SubmitWrapper = styled.div `
    display: flex;
    justify-content: ${(props) => props.showMsg ? 'space-between' : 'flex-end'};
    align-items: center;
`

const SuccessMsg = styled.div `
    color: ${Cyan};
`

const ErrorMsg = styled.div `
    color: ${Magenta};
`

const LeftSide = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    padding-bottom: 40px;

    @media(max-width: 850px) {
        grid-template-columns: 1fr;
    }
`

const ContactTitle = styled(Title) `
    align-self: center;
`

const Copyright = styled.div `
    text-align: center;
    padding: 20px 0;
`

class ContactPage extends Component {
    state = {
        subject: '',
        email: '',
        message: '',
        showError: false,
        showSuccess: false
    };

    submitForm = async (e) => {
        e.preventDefault();

        const {subject, email, message} = this.state;

        const url = 'https://happydoomsday.com/mail.php';
    
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors', // no-cors, *cors, same-origin
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
            body: JSON.stringify({
                subject,
                email,
                message
            }) // body data type must match "Content-Type" header
        });
        const res = await response;
        console.log(res);
        // const json = await response.json(); // parses JSON response into native JavaScript objects
        // console.log('response', response);
        // console.log(json);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    render() {
        const {innerRef} = this.props;
        const {subject, email, message, showSuccess, showError} = this.state;
        const showMsg = showSuccess || showError;

        return (
            <ContainerWrapper>
                <Container ref={innerRef}>
                    <LeftSide>
                        <ContactTitle>Contact</ContactTitle>
                    </LeftSide>
                    <FormWrapper>
                        <p>Feel free to contact us by contact form or e-mail:</p>
                        <Mail>team@happydoomsday.com</Mail>
                        <Form action="/mail.php" type="post" onSubmit={this.submitForm}>
                            <Input name="subject" type="text" value={subject} placeholder="Title" onChange={this.handleInputChange} required />
                            <Input name="email" type="email" value={email} placeholder="E-mail" onChange={this.handleInputChange} required />
                            <Textarea name="message" placeholder="Message" value={message} onChange={this.handleInputChange} required ></Textarea>
                            <SubmitWrapper showMsg={showMsg}>
                                {showSuccess && <SuccessMsg>Message has been sent.</SuccessMsg>}
                                {showError && <ErrorMsg>Something went wrong.</ErrorMsg>}
                                <ButtonContainer>
                                    <Button>Send message</Button>
                                </ButtonContainer>
                            </SubmitWrapper>
                        </Form>
                    </FormWrapper>
                    <Copyright>happydoomsday &copy; {new Date().getFullYear()}</Copyright>
                </Container>
            </ContainerWrapper>
        )
    }
}

export default React.forwardRef((props, ref) => 
    <ContactPage innerRef={ref} {...props}/>
);