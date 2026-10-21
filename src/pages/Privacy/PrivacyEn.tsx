import { B, CONTACT_EMAIL, ExtLink, H2, H3, H4, List, P, SERVER_REPO } from './parts'

// Part 1: how the extension itself handles data in the browser
const extensionItems = [
  {
    title: 'API keys',
    body: 'Stored only locally in your own browser (chrome.storage), and never sent to LingVa or any third party.',
  },
  {
    title: 'Text to be translated',
    body: 'Sent by your browser directly to the translation engine you choose, without passing through LingVa’s servers. LingVa cannot see this content.',
  },
  {
    title: 'Translation history & vocabulary',
    body: 'Stored in your browser’s IndexedDB. Uninstalling the extension or clearing browser data deletes it; cross-device sync is not currently supported.',
  },
  {
    title: 'Usage & cost statistics',
    body: 'Used only to display the local “Usage & Cost” page. Likewise stored only on your device, never uploaded, and not used for any other purpose.',
  },
  {
    title: 'Manga images',
    body: 'When you use manga translation, images on the page are sent to the image recognition service to read the text — see “Image Recognition Service” below. Recognition results and translations are cached locally, up to 500 MB.',
  },
]

// Part 2: what the image recognition service keeps
const serviceTable = [
  ['Uploaded images', 'Not stored', 'Recognize text, generate text-free base images', 'Exist only during processing and are discarded immediately afterwards'],
  ['Recognized text, text-free base images', 'Not stored', 'Returned to your extension', 'Not retained on the server'],
  ['IP address', 'Raw address not stored', 'Abuse prevention (limiting new device registrations, blocking abusive sources)', 'Only an irreversible hash is stored, see 3.2'],
  ['Device identifier (installation ID)', 'Stored', 'Allocate quota, link sponsorships', 'For as long as the service operates; deletion can be requested'],
  ['Daily usage', 'Stored', 'Calculate daily quota, statistics', 'Daily records kept for 90 days, after which only total pages and last-used date are kept'],
  ['Sponsorship orders', 'Stored', 'Redeem sponsor quota, bookkeeping', 'For as long as the service operates'],
  ['Account, name, phone number, email', 'Not collected', '—', '—'],
]

export default function PrivacyEn() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 text-gray-700">
      <h1 className="text-3xl font-semibold text-gray-900">Privacy Policy</h1>
      <p className="mt-3 text-xs text-gray-400">Effective date: October 20, 2026 · Last updated: October 20, 2026</p>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500">
        By default, all of LingVa’s data stays on your own computer. The only thing that passes through LingVa’s servers is images
        during manga translation, and the server{' '}
        <B>does not store the images you upload, does not store your IP address, does not require an account, and does not use any analytics or advertising tools</B>.
      </p>
      <p className="mt-3 max-w-xl text-xs leading-relaxed text-gray-400">
        This English version is a translation provided for convenience. If it differs from the Chinese version, the Chinese version prevails.
      </p>

      <H2>1. The LingVa Extension</H2>
      <P>The extension runs in your browser. Here is where each kind of data goes:</P>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {extensionItems.map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
          </div>
        ))}
      </div>

      <H2>2. Image Recognition Service</H2>
      <P>
        In short: to allocate daily quota and prevent abuse, we record a randomly generated device identifier and how many pages it uses each day. Beyond that, we store no information that can identify you.
      </P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-gray-50 text-xs text-gray-500">
            <tr>
              <th className="px-4 py-3 font-medium">Information</th>
              <th className="px-4 py-3 font-medium">Stored?</th>
              <th className="px-4 py-3 font-medium">Purpose</th>
              <th className="px-4 py-3 font-medium">Retention</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {serviceTable.map((row) => (
              <tr key={row[0]} className="border-t border-gray-100">
                {row.map((cell, i) => (
                  <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'text-gray-900' : ''}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>1. Scope</H3>
      <P>
        This part applies to the official LingVa image recognition service (ocr.mushanyu.xyz) operated by MuShanYu (“we”). When you
        read manga, the LingVa extension sends the images on the page to this service to recognize the text, and the extension then
        handles translation and typesetting.
      </P>
      <P>This part does not apply to:</P>
      <List
        items={[
          <>
            <B>Self-hosted services</B>: if the service address in your extension points to a service deployed by you or someone else
            (using the open-source code <ExtLink href={SERVER_REPO}>lingva-image-server-pub</ExtLink>), your data is handled by whoever
            deployed that service and has nothing to do with us.
          </>,
          <>
            <B>Processing within the extension in your browser</B>: see “1. The LingVa Extension” above.
          </>,
          <>
            <B>Sponsorship platforms</B>: when you pay on Afdian or Ko-fi, your payment information is handled by those platforms under
            their own privacy policies; we cannot see your payment account details.
          </>,
        ]}
      />

      <H3>2. Information We Do Not Collect</H3>
      <P>
        Using this service <B>does not require an account</B>. We do not collect your name, phone number, email, ID documents or any
        other identity information. The service sets no cookies for regular users and uses no third-party analytics, advertising or
        profiling tools. We cannot see which websites you browse; we only receive the images the extension sends.
      </P>

      <H3>3. Information We Process</H3>
      <H4>3.1 Images you upload</H4>
      <P>
        The extension sends us images of manga pages so we can detect text locations, recognize the text and generate base images with
        the original text removed. Recognition results are returned directly to your extension.
      </P>
      <List
        items={[
          <>
            Images <B>are not stored</B>, and are not used to train models or for any other purpose.
          </>,
          'During processing, images are held in server memory; larger images (over 1 MB) are temporarily written to a temp file on the server and deleted as soon as the request ends.',
          'Recognized text and generated base images are only returned to you; they are not kept on the server or written to logs.',
          'Images are forwarded from the server that receives the request (Alibaba Cloud Beijing) to the server that performs recognition (Alibaba Cloud Shanghai) over the cloud provider’s internal network, not the public internet.',
        ]}
      />

      <H4>3.2 IP address</H4>
      <P>
        Your IP address reaches the server along with each request. We <B>do not store the raw IP address</B>. Instead, using a key kept
        only in the server configuration, we compute an irreversible hash of it (HMAC-SHA256), which is used to:
      </P>
      <List
        items={[
          'Limit how many new devices a single network can register per day, to prevent bulk quota farming. This count is kept for the current day only.',
          'Block networks that persistently abuse the service (a network’s hash is kept long-term only if it is blocked).',
          'Let administrators view recent requests to troubleshoot failures and detect abuse. These records live only in server memory, at most 5,000 entries, and are cleared when the service restarts.',
        ]}
      />
      <P>
        The key used for hashing is not stored alongside the database, so even if the database were leaked, IP addresses could not be
        recovered from the hashes. The server’s access logs do not record IP addresses.
      </P>

      <H4>3.3 Device identifier and anonymous credential</H4>
      <P>
        On first use, the extension randomly generates an <B>installation ID</B> (a random string containing no device or personal
        information) and uses it to request an anonymous credential from us. The credential is valid for 24 hours and is renewed
        automatically by the extension when it expires.
      </P>
      <P>
        We store when an installation ID was registered and whether it has been disabled for abuse. An installation ID cannot be linked
        to a specific person; reinstalling the extension generates a new one.
      </P>

      <H4>3.4 Daily usage</H4>
      <P>
        To enforce the free daily quota, we record the number of pages used per day for each installation ID. Daily records are kept for
        90 days; older records are merged into a total page count and last-used date, and then deleted.
      </P>

      <H4>3.5 Request records</H4>
      <P>
        For troubleshooting, server memory keeps a summary of recent requests: time, IP hash, installation ID, quota tier, result and
        error type, duration, image dimensions and the number of recognized text blocks. <B>Image and text content are not included</B>.
        At most 5,000 entries are kept, and they are cleared when the service restarts. Server logs record only statistics such as
        processing time and counts, again with no image or text content, IP addresses or file names; log files are size-capped and old
        logs are overwritten automatically.
      </P>

      <H4>3.6 Sponsorship information</H4>
      <P>If you sponsor via Afdian or Ko-fi and enter your order number in the extension to redeem sponsor quota, we store:</P>
      <List
        items={[
          'The sponsorship platform, order number, amount, currency, the corresponding number of sponsored days, and the time;',
          <>
            An irreversible hash of the payer identifier (the user ID on Afdian, the payment email on Ko-fi), used to combine multiple
            orders from the same sponsor; <B>the raw user ID or email is not stored</B>;
          </>,
          'Which installation IDs the sponsorship is bound to.',
        ]}
      />
      <P>
        To verify Afdian orders, we query the order status from Afdian’s open API using the order number. The payer name, message and
        similar content included in Ko-fi callbacks are not stored.
      </P>

      <H3>4. How We Use This Information</H3>
      <P>
        The information above is used only to: provide the image recognition service; allocate and enforce daily quota; redeem and
        calculate sponsor quota; prevent abuse and keep the service stable; and track overall service usage and funding. We do not use
        this information for advertising or profiling, and we never sell it to anyone.
      </P>

      <H3>5. Sharing and Third Parties</H3>
      <List
        items={[
          <>
            <B>Cloud provider</B>: the service runs on Alibaba Cloud servers, and data is stored on those servers.
          </>,
          <>
            <B>Afdian</B>: queried only with an order number to check order status when verifying orders.
          </>,
          <>
            <B>Legal requirements</B>: only when required by laws and regulations or lawfully requested by competent authorities, we
            provide the information we actually hold. Since we do not store images or raw IP addresses, we cannot provide them.
          </>,
        ]}
      />
      <P>Apart from the above, we do not share your information with any third party.</P>

      <H3>6. Storage Location</H3>
      <P>
        Servers are located in <B>mainland China</B> (Alibaba Cloud Beijing and Shanghai). If you use this service from outside mainland
        China, the images you upload are transferred to mainland China for processing and discarded once processed.
      </P>

      <H3>7. Security Measures</H3>
      <List
        items={[
          'All traffic between the extension and the service is encrypted with HTTPS.',
          'IP addresses and payer identifiers are stored only as hashes, and the hashing key is kept separately from the database.',
          'Anonymous credentials are signed by the server, and the signing key is rotated regularly.',
          'The admin dashboard requires a password login and limits failed login attempts.',
        ]}
      />

      <H3>8. Your Rights</H3>
      <P>
        Because we do not store information that directly identifies you, we cannot find “your data” on our own. If you want to access or
        delete the records associated with an installation ID (registration info, usage, sponsorship bindings), contact us as described in
        section 11 and provide that installation ID (you can view and copy it under “Manga recognition service” in the extension’s
        settings). We will handle your request within 15 business days after verification.
      </P>
      <P>
        Please note: once a sponsorship binding is deleted, that device will no longer receive sponsor quota. You can also simply uninstall
        the extension; the old installation ID will no longer be used, and its daily usage will be deleted automatically after 90 days.
      </P>

      <H3>9. Minors</H3>
      <P>
        This service is not directed at minors and does not collect any information that could identify age or identity. Minors should
        obtain a guardian’s consent before sponsoring this service.
      </P>

      <H3>10. Policy Changes</H3>
      <P>
        If we change how we handle information, we will update this policy and the “Last updated” date at the top. For significant changes,
        such as collecting new information or changing its purpose, we will give advance notice in the extension or on the project page.
      </P>

      <H3>11. Contact Us</H3>
      <P>
        If you have any questions about this policy, or wish to exercise the rights in section 8, please email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </P>
      <P>
        This policy is written based on the actual behavior of the open-source server code; you can review the image recognition
        service’s source code on <ExtLink href={SERVER_REPO}>GitHub</ExtLink>.
      </P>
    </section>
  )
}
