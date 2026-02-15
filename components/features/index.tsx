import React from 'react'
import { Heading } from '../heading'
import { Container } from '../container'
import { Subheading } from '../subheading'

export const Features= () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32">
        <div className="flex items-baseline-last justify-between">
            <Heading>
                Built for Fast Moving <br/> Teams that Need Control.
            </Heading>
            <Subheading>
                Agents work inside your existing tools, with built-in approvals, brand
                and policy guardrails, and full traceability. Every action is
                auditable, every outcome accountable.
            </Subheading>
        </div>
    </Container>
  )
}
