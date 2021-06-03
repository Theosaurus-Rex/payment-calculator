import styled from 'styled-components'
import deviceSize from '../../utils/device-size'

const FlexContainer = styled.div`
    // Mobile first
    display: flex;
    flex-direction: column;

    // Make this a row on Larger Devices
    @media ${deviceSize.laptop} {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

export default FlexContainer;