import React from 'react';
import { Result, Button } from 'antd';
import styled from 'styled-components';
import { HomeOutlined, ReloadOutlined } from '@ant-design/icons';
import Layout from '../../layout';

const CatchPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Catch = () => (
  <Layout>
    <CatchPage>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, something went wrong."
        extra={
          <>
            <Button
              size="large"
              icon={<HomeOutlined />}
              onClick={() => window.location.replace(window.location.href)}
            />
            <Button
              icon={<ReloadOutlined />}
              onClick={() => window.location.reload()}
              type="dashed"
              size="large"
            >
              Reload
            </Button>
          </>
        }
      />
    </CatchPage>
  </Layout>
);

export default Catch;
