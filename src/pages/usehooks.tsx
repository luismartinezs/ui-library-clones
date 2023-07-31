import Head from "next/head";
import Layout from "~/components/Layout";
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
        <section className="flex flex-col gap-2">
          <h2>useLocalStorage</h2>
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
        </section>
      </Layout>
    </>
  );
}
