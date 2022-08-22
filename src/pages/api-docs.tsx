import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<{
  spec: any;
}>(import('swagger-ui-react'), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      info: {
        title: 'Weiss API docs',
        version: '1.0.0'
      }
    },
    apiFolder: './src/pages/api',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      apikey: {
        type: 'apiKey',
        name: 'apikey',
        in: 'header'
      }
    }
  });

  return {
    props: {
      spec
    }
  };
};

export default ApiDoc;
