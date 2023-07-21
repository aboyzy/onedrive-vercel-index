/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env。NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'xiaozoutx@zhizy.onmicrosoft.com'，

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/tx.jpeg'，

  // Prefix for KV Storage
  kvPrefix: process.env。KV_PREFIX || ''，

  // The name of your website. Present alongside your icon.
  title: "稚的网盘"，

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/public'，

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100，

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Inter'，
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono'，
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap']，

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    '<img alt="guohui" src="https://jsd.cdn.zzko.cn/gh/aboyzy/pic_tuchuang/img/202307211441865.webp" height="16" width="20" ><a target="_blank" href="https://beian.miit.gov.cn" title="豫ICP备2023016580号-1" style="text-decoration:none;" >豫ICP备2023016580号-1 &emsp;</a> <img alt="gongan" src="https://cdn.staticaly.com/gh/aboyzy/pic_tuchuang@main/img/gongan.6dz5yhslbi40.webp" height="16" width="20" > <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41132902001166" title="豫公网安备 41132902001166号" style="text-decoration:none;"> 豫公网安备 41132902001166号 </a>'，

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/盘2/原博客内容']，

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:zhi@aboyzy.top'，

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'GitHub'，
      link: 'https://github.com/aboyzy'，
    }，
  ]，

  // This is 1 天之前.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss'，
}
