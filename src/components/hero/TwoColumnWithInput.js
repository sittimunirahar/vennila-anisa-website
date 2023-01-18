import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/vennila-anisa/test-pro.png"; 
import { Subheading } from "components/misc/Headings.js";

const Container = tw.div`relative bg-gradient-to-r from-pink-200 via-white to-white`;
// bg-gradient-to-t from-pink-200 via-white to-white
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight font-poppins pl-5`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg text-justify pr-5 pl-5`;

// const Actions = styled.div`
//   ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
//   input {
//     ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
//   }
//   button {
//     ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
//   }
// `;

const Actions = styled.div`
  ${tw`relative justify-center text-center mx-auto lg:mx-0 pl-5`}
  select {
    ${tw`sm:pr-16 pl-4 py-6 sm:py-5 rounded-tl-full rounded-bl-full border-2 float-left font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500`}
  }
`;

const SearchButton = styled.div`
button {
  ${tw`bg-primary-500 w-1/4 bg-primary-500 text-slate-100 font-bold mr-2 my-4 sm:my-2 rounded-tr-full rounded-br-full py-6 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
}
`;

function ActionsButton() {
  const shoot = () => {
    alert("Great Shot!");
  }
  return (
    <SearchButton><button onClick={shoot}>Search</button></SearchButton>
  );
}

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

// const CustomersLogoStrip = styled.div`
//   ${tw`mt-12 lg:mt-20`}
//   p {
//     ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
//   }
//   img {
//     ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
//   }
// `;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              VENNILA ANISA & ASSOCIATES
            </Heading>
            <Subheading>
              ADVOCATES & SOLICITORS &nbsp;
              <br></br><span tw="text-slate-500 italic">PEGUAMBELA & PEGUAMCARA</span>
            </Subheading>
            <Paragraph>
            We are a dedicated team of experienced attorneys committed to providing the highest quality legal representation to our clients. 
            We specialize in a wide range of areas, including sale and purchase agreement, debt recovery, joint venture agreement, and more.
            </Paragraph>
            <Paragraph>
              Get the rough estimated cost of our services:
            </Paragraph>
            <Actions>
              <form>
                <select id="query">
                  <option value="" disabled selected>
                    Select Service
                  </option>
                  <option value="administration of estate">Administration of Estate</option>
                  <option value="debt recovery">Debt Recovery</option>
                  <option value="joint venture agreement">Joint Venture Agreement</option>
                  <option value="sale purchase agreement">Sale and Purchase Agreement</option>
                  <option value="sale purchase property">Sale and Purchase Property</option>
                  <option value="share sales agreement">Share Sales Agreement</option>
                </select>
              </form>
              {/* <button tw="bg-primary-500" onClick="{searchService}">Search</button> */}
            </Actions>
            <ActionsButton></ActionsButton>
            {/* <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button tw="bg-primary-500">Get Started</button>
            </Actions> */}
            {/* <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip> */}
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl pr-0" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
