/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
    render() {
        const StyledFooter = styled.footer`
            background:yellow;
            position:fixed;
            left:0;
            bottom:0;
            width:100%;
            height:50px;
            line-height:50px;
            text-align:center;
            ul{
                display:flex;
                list-style:none;
                li{
                    flex:1;

                    &:hover{
                        background:red;
                    }
                }
            }
        `
        return (
            <StyledFooter>
                <ul>
                    <li>首页</li>
                    <li>列表</li>
                    <li>我的</li>
                </ul>
            </StyledFooter>
        )
    }
}
