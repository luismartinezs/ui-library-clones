import Head from "next/head";
import Layout from "~/components/Layout";
import { Section } from "~/components/Section";
import { Button } from "~/mantine/core/Button";

export default function MantinePage() {
  return (
    <>
      <Head>
        <title>Mantine clone</title>
        <meta name="description" content="Mantine clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section title="Button">
          <div className="mt-4">
            <Button>Click me</Button>
          </div>
        </Section>
      </Layout>
    </>
  );
}
