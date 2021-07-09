// Copyright 2021 Franklin Siqueira
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------
//
//// Gama Academy | Hiring Coders | [HC] Módulo 07 | React
//
// ------------------------------------------------------------------------
//  pages/ApiGithub/style/style.js
// ------------------------------------------------------------------------
/** Imports */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/** */
export const Button = styled.button`
    background: #000;
    border: 1px solid #000;
    border-radius: 0 .25rem .25rem 0;
    color: #fff;
    height: 2rem;
    transition: 0.3s;
        &:hover{
            transform: scale(1.1);
        }
        &:focus,
        &:active{
            outline: none;
            box-shadow: none;
        }
`;
export const Conteiner = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;
export const ErrorMessage = styled.span`
    display: block;
    font-size: .85rem;
    color: red;
    margin-top: 1rem;
    padding: .5rem;
`;
export const InputConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
        &:focus,
        &:active{
            outline: none;
            box-shadow: none;
        }
`;
export const LinkToLast = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: #fff;
    padding: .5rem;
    text-decoration: none;
    font-weight: 400;
`;
export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;
export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;