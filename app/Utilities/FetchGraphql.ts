export default async function fetchGraphqlData(query: string) {
   try {
      const wpurl: any = process.env.WP_URL;
      const data = await fetch(wpurl, {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify({
            query,
         }),
         next: {
            revalidate: 60,
         },
      });
      if (data.status > 300) {
         throw new Error(`Ошибка запроса: ${data.status}`);
      }
      return data.json();
   } catch (err: any) {
      console.error("error when fetching data", err);
   }
}
