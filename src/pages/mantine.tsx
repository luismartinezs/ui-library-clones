import Head from "next/head";
import Layout from "~/components/Layout";
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
        <section>
          <h2 className="text-3xl font-bold">Button</h2>
          <div className="mt-4">
            <Button>Click me</Button>
          </div>
        </section>
      </Layout>
    </>
  );
}
