import styled from '@emotion/styled'

export const Container = styled.section`
  align-items: center;
  background-color: lightgray;
  flex-direction: column;
  display: flex;
  padding: 50px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 620px;

  @media (max-width: 768px) {
    width: 100%;
  }
`