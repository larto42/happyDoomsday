import React from "react"
import styled from "styled-components"
import ContainerWrapper from "../ContainerWrapper"
import Container from "../Container"
import Content from "../Content"
import Title from "../Title"
import Rectangle from "../Rectangle"
import SmallButton from "../SmallButton"

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  @media (max-width: 1280px) {
    margin-right: 50px;
  }
`

const Form = styled.form`
  width: 150%;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  font-family: Chakra Petch;
  font-size: 16px;
  padding: 10px;
  margin: 7px 0;
`

const Textarea = styled.textarea`
  font-family: Chakra Petch;
  font-size: 16px;
  padding: 10px;
  margin: 7px 0;
`

const Email = styled.h4`
  font-size: 32px;
  margin: 20px 0;
`

const rectangles = [
  <Rectangle color="#00ffff" width="95" height="9" left="-30" top="20" />,
  <Rectangle color="#00ffff" width="60" height="15" left="-55" top="33" />,
  <Rectangle color="#ff00ff" width="90" height="40" right="-30" top="-6" />,
  <Rectangle color="#ff00ff" width="45" height="12" right="-40" bottom="14" />,
  <Rectangle color="#00ffff" width="95" height="35" left="-10" bottom="-10" />,
]

export default () => (
  <ContainerWrapper>
    <Container>
      <Content marginTop="200" justify="flex-start" align="flex-start">
        <Title text="Contact" marginLeft="90" />
        <ContactForm>
          <p>Feel free to contact us by contact form or e-mail:</p>
          <Email>team@happydoomsday.com</Email>
          <Form>
            <Input type="text" placeholder="Title" />
            <Input type="email" placeholder="E-mail" />
            <Textarea placeholder="Message" rows="6"></Textarea>
          </Form>
          <SmallButton
            text="Send Email"
            left={-10}
            fontSize="20"
            rectangles={rectangles}
          />
        </ContactForm>
      </Content>
    </Container>
  </ContainerWrapper>
)
