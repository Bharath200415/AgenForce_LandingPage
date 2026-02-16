import React from 'react'
import { Container } from './container'
import { Heading } from './heading'
import { Subheading } from './subheading'
import { Button } from './ui/button'
import { Landingimages } from './landing-images'
import Link from 'next/link'

export const Hero_v2 = () => {
  return (
    <section className=' pt-10 overflow-hidden'>
        <Container>
            <Heading >
                Built for Speed, <br/>  Designed for Scale
            </Heading>
            <Subheading className='py-8'>
                Deploy AI agents that plan, act through your tools, and report <br/> outcomes—without changing how your teams work.
            </Subheading>

                <Landingimages firstImageSrc={"https://assets.aceternity.com/screenshots/4.jpg"}
                secondImageSrc={'https://assets.aceternity.com/screenshots/3.jpg'}/>


        </Container>
    </section>

  )
}
