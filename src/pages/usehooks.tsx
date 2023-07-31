import Head from "next/head";
import Layout from "~/components/Layout";
import { Section } from "~/components/Section";
import { useLocalStorage } from "~/usehooks/useLocalStorage";

export default function UseHooksPage() {
  const [meaning, saveMeaning] = useLocalStorage("meaning", "42");

  return (
    <>
      <Head>
        <title>UseHooks clone</title>
        <meta name="description" content="UseHooks clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section title="useLocalStorage">
          <div>Current meaning: {meaning}</div>
          <label>
            Meaning:
            <input
              type="text"
              value={meaning}
              onChange={(e) => saveMeaning(e.target.value)}
            />
          </label>
          <div className="text-sm text-gray-400">
            Refreshing page should persist change
          </div>
        </Section>
      </Layout>
    </>
  );
}
