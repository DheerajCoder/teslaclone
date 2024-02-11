import React from 'react'
import styled from "styled-components"
import Section from './Section'



function Home() {
  return (
    <div>

        <Container>

         
            <Section
              title="Model S"
              description= " Order Online for Touchless Delivery!"
              backgroundImg="model-s.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing inventory"
            
            />
            <Section
            title="Model 3"
            description= " Order Online for Touchless Delivery!"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
            />
            <Section
            title="Model X"
            description= " Order Online for Touchless Delivery!"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
            />
            <Section
            title="Model Y"
            description= " Order Online for Touchless Delivery!"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
            />
            <Section
            title="Solar panel"
            description= " Order Online for Touchless Delivery!"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
            />

            <Section
            title="Solar roof"
            description= " Order Online for Touchless Delivery!"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
            />

            <Section
            title="Accesories"
            description= " Order Online for Touchless Delivery!"
            backgroundImg="new-interior.jpg"
            leftBtnText="Custom Order"
            
            />
  
            

        </Container>

   

    
    </div>
  )
}

export default Home

const Container= styled.div`
 height:100vh;


`

