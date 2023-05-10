import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface Props {
  statusCode: number;
}

const Error: React.FC<Props> = ({ statusCode }) => {
  const title = statusCode === 404 ? "404" : "Error";

  return (
    <>
      <Head>
        <title></title>
      </Head>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const statusCode = res ? res.statusCode : 404;

  return {
    props: {
      statusCode,
    },
  };
};

export default Error;
