import React from "react";
import {Flex,Grid,GridItem} from "../Container/Container"


const Header = ({children, className}) => 
<header style={{height: "80px"}}>
<Flex alignItems="baseline" justifyContent="space-between">
<p>logo</p>
<Grid columns={4}>
    <GridItem span={1}>home</GridItem><GridItem span={1}>about</GridItem><GridItem span={1}>contact</GridItem>
</Grid>
</Flex>
</header>


export {Header}