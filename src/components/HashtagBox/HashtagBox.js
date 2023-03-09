import { Box, Diviser, StyledLink, Title } from "./styled";

export default function HashtagBox(){

    const data = ['react','docker','teste','lol','thebest','react','react','react','react','react']
    return (
        <Box>
            <Title>trending</Title>
            <Diviser/>
            {data.map(el=>(
                <StyledLink to={`/hashtag/${el}`}>
                   # {el}
                </StyledLink>
            ))}
        </Box>
    )
}