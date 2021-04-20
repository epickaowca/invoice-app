import PrimaryButton from '../elements/PrimaryButton'
import SecondaryButton from '../elements/SecondaryButton'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 50px;
  & > button{
    margin: 50px;
  }
`

export default function Home() {
  return (
    <Wrapper>
      <PrimaryButton />
      <PrimaryButton content='Mark as Paid' />
      <PrimaryButton color='tomato' content='Delete' />
      <PrimaryButton case2 content='+ Add New Item' />
      <SecondaryButton>Edit</SecondaryButton>
      <SecondaryButton case2>Save as Draft</SecondaryButton>
    </Wrapper>
  )
}

