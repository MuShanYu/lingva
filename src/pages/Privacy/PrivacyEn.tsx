import {
  B,
  Code,
  ExtLink,
  Footnote,
  H2,
  H3,
  HOMEPAGE,
  ISSUES_URL,
  Lead,
  List,
  Mail,
  P,
  Page,
  SERVER_REPO,
  SummaryTable,
  type SummaryRow,
} from './parts'

const summaryRows: SummaryRow[] = [
  { data: 'History, vocabulary, usage stats, settings', sent: 'No', tone: 'no', note: 'Stored only in your browser' },
  { data: 'Translation API keys', sent: 'No', tone: 'no', note: 'Stored locally; sent only to the matching provider' },
  { data: 'Text you translate', sent: 'No', tone: 'no', note: 'Sent directly from your browser to your chosen provider' },
  { data: 'Manga page images', sent: 'Yes (official service)', tone: 'yes', note: 'Discarded right after recognition; never stored' },
  {
    data: 'Single PDF page images',
    sent: 'Yes (scanned-page recognition or layout enhancement)',
    tone: 'yes',
    note: 'Discarded right after processing; the PDF file itself is never uploaded',
  },
  {
    data: 'Text and positions on a PDF page',
    sent: 'Yes (layout enhancement)',
    tone: 'yes',
    note: 'Used only to divide the page into paragraphs and blocks; never stored',
  },
  { data: 'IP address', sent: 'Raw address not stored', tone: 'no', note: 'Only an irreversible hash is kept, for abuse prevention' },
  { data: 'Installation ID and daily usage', sent: 'Yes (official service)', tone: 'yes', note: 'Used to apply the daily quota' },
  { data: 'Sponsorship orders', sent: 'Yes (if you sponsor)', tone: 'yes', note: 'Used to apply sponsor quota' },
  { data: 'Name, phone, email, browsing history', sent: 'Not collected', tone: 'no', note: '—' },
]

export default function PrivacyEn() {
  return (
    <Page title="LingVa Privacy Policy" meta={['Effective: October 21, 2026', 'Last updated: October 29, 2026']}>
      <Lead>
        In short:{' '}
        <B>
          your translation history, vocabulary, settings and API keys stay in your browser, and the text you translate goes straight from
          your browser to the translation provider you choose. It never passes through us.
        </B>{' '}
        Only manga and image translation, and the PDF reader’s scanned-page recognition and layout enhancement (both turned on by you),
        send images to LingVa’s recognition service; layout enhancement also includes the positions and content of that page’s text. We do
        not store those images or that text, we do not store your IP address, you need no account, and the extension and recognition
        service use no analytics or advertising tools.
      </Lead>
      <SummaryTable headers={['Data', 'Sent to us?', 'Notes']} rows={summaryRows} />

      <H2 no={1}>Scope</H2>
      <P>
        This policy explains how the LingVa browser extension (the “extension”) and the official LingVa image recognition service we
        operate (<Code>ocr.mushanyu.xyz</Code>, the “recognition service”) handle your information. “We” means MuShanYu, the developer of
        LingVa.
      </P>
      <P>The following are handled by third parties under their own privacy policies and are not covered here:</P>
      <List
        items={[
          <>
            <B>The translation provider you choose</B>, such as DeepL, Google Cloud Translation, Microsoft Translator, OpenRouter, AI
            providers such as DeepSeek, Gemini, Grok, GLM and Qwen, or an endpoint you enter yourself.
          </>,
          <>
            <B>Self-hosted recognition servers</B>: if you enter a server address you or someone else deployed (from the open-source{' '}
            <ExtLink href={SERVER_REPO}>lingva-image-server-pub</ExtLink>), that server’s operator handles the data.
          </>,
          <>
            <B>Sponsorship platforms</B>: payments on Afdian or Ko-fi are processed by those platforms. We never see your payment account
            details.
          </>,
          <>
            <B>This website</B> (<Code>lingva.mushanyu.xyz</Code>) uses Google Analytics to measure anonymous traffic (such as page
            views, referrers, approximate region and device type), handled by Google under its own privacy policy. This applies only to
            the website, not the extension; the extension contains no analytics code.
          </>,
        ]}
      />

      <H2 no={2}>Data that stays in your browser</H2>
      <P>
        The following is stored in your browser’s IndexedDB and <Code>chrome.storage.local</Code> and is never uploaded to us:
      </P>
      <List
        items={[
          'Settings and preferences (interface language, target language, floating button position, per-site switches, etc.)',
          'API keys and endpoint addresses you enter for translation providers',
          'Translation history',
          'Vocabulary notebook, including each word’s original context and source URL, and review progress',
          'Usage and cost statistics',
          'Cached manga recognition results and translations',
          'Cached PDF scanned-page recognition and layout analysis results (keyed by a fingerprint of the file’s content, which is never uploaded)',
        ]}
      />
      <P>
        You can clear history, statistics and caches inside the extension. Uninstalling the extension or clearing browser data removes all
        of it.
      </P>

      <H2 no={3}>What the extension sends over the network</H2>
      <H3>3.1 Text to translate</H3>
      <P>
        When you translate selected text, a webpage, a document or subtitles, the text is sent <B>directly</B> from your browser to the
        translation service you selected. We run no proxy and never see this text.
      </P>
      <List
        items={[
          <>
            <B>Built-in translation</B> uses Google Translate’s public web endpoint and needs no account or API key.
          </>,
          <>
            <B>DeepL, Google Cloud, Microsoft and AI providers</B> use your own API key, which is included with the request.
          </>,
          <>
            <B>Custom endpoints</B> receive requests at the address you entered.
          </>,
          'With AI engines, neighboring text (for manga, the original text of neighboring pages) is sent as context for more consistent translations.',
        ]}
      />
      <H3>3.2 Word lookups</H3>
      <P>
        When you look up a single word, the extension sends that word to a public dictionary API to get pronunciation, definitions and
        examples.
      </P>
      <H3>3.3 Model catalog</H3>
      <P>
        The extension periodically downloads public model lists and price catalogs (from OpenRouter and a JSON file we maintain on GitHub).
        These requests contain no personal information or translated content.
      </P>
      <H3>3.4 Manga and images</H3>
      <P>
        When you use manga or image translation, the extension sends page images to the recognition service you selected. On some manga
        sites the extension adds that site’s Referer header to its own image requests so the site serves the image you are already
        viewing; it never changes requests made by the web page itself. Section 4 explains how the official recognition service handles
        this data.
      </P>
      <H3>3.5 PDF</H3>
      <P>
        PDFs are opened and parsed in your browser, and <B>the file itself is never uploaded</B>. When translating, text extracted from the
        PDF is sent to your chosen translation service as described in section 3.1. Single PDF pages are sent to the recognition service
        you selected only in these two cases:
      </P>
      <List
        items={[
          <>
            <B>Scanned-page recognition</B>: after you click “Recognize scanned pages”, an image rendered from each scanned page is sent to
            recognize its text and, where the service supports it, to produce a version with the original text removed.
          </>,
          <>
            <B>Layout enhancement</B>: we ask for your consent before you turn it on for the first time. Once it is on, the text pages you
            are reading or about to reach are rendered to images and sent together with the text and position of each line in the page’s
            text layer, to divide the page into paragraphs, headings, tables and other blocks.
          </>,
        ]}
      />
      <P>
        Results are cached in your browser and reused when the same page is opened again, so it is not sent a second time. Section 4
        explains how the official recognition service handles this data.
      </P>

      <H2 no={4}>What the official recognition service processes</H2>
      <H3>4.1 Images and PDF pages</H3>
      <List
        items={[
          'Manga images and PDF page images are used only to locate and recognize text, analyze the layout and produce a version with the original text removed. Results go straight back to your extension.',
          <>
            Images are <B>never stored</B> and are not used to train models or for any other purpose. During processing they are held in
            memory; images larger than 1 MB may be written to a temporary file that is deleted as soon as the request ends.
          </>,
          'The PDF text sent with layout enhancement is used only to assign text lines to their blocks. Like images, it is never stored or used for anything else.',
          'Recognized text, text sent with a request and processed images are not kept on the server and are not logged.',
          'Images and text are forwarded from the receiving server (Alibaba Cloud, Beijing) to the recognition server (Alibaba Cloud, Shanghai) over the cloud provider’s internal network, not the public internet.',
        ]}
      />
      <H3>4.2 IP address</H3>
      <P>
        Your IP address reaches the server with each request. We <B>do not store raw IP addresses</B>. We only keep an irreversible hash
        (HMAC-SHA256, using a separately kept secret key), which is used to:
      </P>
      <List
        items={[
          'limit how many new devices one network can register per day, to prevent quota farming (this count is kept for the current day only);',
          'block networks that persistently abuse the service (a network’s hash is kept long-term only if it is blocked);',
          'troubleshoot and detect abuse, using a summary of recent requests held in server memory only (at most 5,000 entries, cleared on restart).',
        ]}
      />
      <P>
        The hashing key is stored separately from the database, so IP addresses cannot be recovered even if the database leaks. Server
        access logs do not record IP addresses.
      </P>
      <H3>4.3 Installation ID and anonymous credential</H3>
      <P>
        The first time the extension uses the recognition service, it generates a random <B>installation ID</B> (a random string with no
        device or personal information) and uses it to obtain an anonymous credential valid for 24 hours, renewed automatically. We store
        when the installation ID was registered and whether it has been disabled for abuse. Reinstalling the extension creates a new
        installation ID.
      </P>
      <H3>4.4 Daily usage</H3>
      <P>
        To enforce the free daily quotas, we record, per installation ID and day, how many pages it recognizes (manga, images and scanned
        PDF pages combined) and how many pages it sends for layout analysis, counted separately. Daily records are kept for 90 days; then
        recognized pages are merged into a total page count and last-used date, and layout analysis records are deleted.
      </P>
      <H3>4.5 Request summaries and logs</H3>
      <P>
        Server memory keeps a summary of recent requests: time, IP hash, installation ID, quota tier, result and error type, duration,
        image size and number of text blocks found. It <B>contains no images or text</B>. Server logs record only timing and count
        statistics, with no images, text, IP addresses or file names, and old logs are overwritten automatically.
      </P>
      <H3>4.6 Sponsorship</H3>
      <P>If you sponsor through Afdian or Ko-fi and enter your order number in the extension, we store:</P>
      <List
        items={[
          'the platform, order number, amount, currency, the sponsorship days it grants and the time;',
          <>
            an irreversible hash of the payer identifier (Afdian user ID or Ko-fi payer email), used to combine orders from the same
            sponsor; <B>the raw user ID or email is not stored</B>;
          </>,
          'the installation IDs the sponsorship is linked to.',
        ]}
      />
      <P>
        To verify Afdian orders, we query the order status from Afdian’s open API using the order number. Payer names and messages included
        in Ko-fi notifications are not stored.
      </P>

      <H2 no={5}>How we use this information</H2>
      <P>
        Information received by the recognition service is used only to provide image recognition and PDF layout analysis, apply daily
        quotas, apply sponsorships,
        prevent abuse and keep the service stable, and measure overall usage and funding. We do not use it for advertising or profiling, we
        do not sell or transfer it to anyone, and we do not use it to determine creditworthiness or for lending.
      </P>

      <H2 no={6}>Sharing and third parties</H2>
      <List
        items={[
          <>
            <B>Cloud provider</B>: the recognition service runs on Alibaba Cloud, and its data is stored on those servers.
          </>,
          <>
            <B>Afdian</B>: queried with an order number only to verify a sponsorship.
          </>,
          <>
            <B>Legal requirements</B>: we provide information we actually hold only when required by law or by a competent authority.
            Because we do not store images, PDF text or raw IP addresses, we cannot provide them.
          </>,
        ]}
      />
      <P>Apart from these and the translation services you choose yourself (section 3), we do not share your information with anyone.</P>

      <H2 no={7}>Where data is processed</H2>
      <P>
        The official recognition service runs on servers in <B>mainland China</B> (Alibaba Cloud, Beijing and Shanghai). If you use it
        from outside mainland China, the images and PDF pages you send are transferred to mainland China for processing and discarded
        afterwards. If you prefer otherwise, use a self-hosted server or do not use manga and image translation, scanned-page recognition
        or layout enhancement.
      </P>

      <H2 no={8}>Security</H2>
      <List
        items={[
          'All traffic between the extension and the recognition service uses HTTPS.',
          'IP addresses and payer identifiers are stored only as hashes, and the hashing key is kept separately from the database.',
          'Anonymous credentials are signed by the server, and signing keys are rotated regularly.',
          'The admin console requires a password and limits failed login attempts.',
        ]}
      />

      <H2 no={9}>Your rights</H2>
      <P>Data in your browser is fully under your control and can be cleared in the extension at any time.</P>
      <P>
        The recognition service stores nothing that directly identifies you, so we cannot look up “your data” on our own. To access or
        delete records linked to a device or a sponsorship (registration, usage, sponsorship links), contact us as described in section 12
        and include the installation ID or sponsorship order number. We will act on verified requests within 15 business days. Removing a
        sponsorship link ends the sponsor quota for that device. You can also simply uninstall the extension: the old installation ID is no
        longer used and its daily usage records are deleted automatically after 90 days.
      </P>

      <H2 no={10}>Children</H2>
      <P>
        The extension and recognition service are not directed at children and collect no information that identifies age or identity.
        Minors should get a parent’s or guardian’s consent before sponsoring.
      </P>

      <H2 no={11}>Changes</H2>
      <P>
        If the way we handle information changes, we will update this policy and the “Last updated” date. For significant changes, such as
        collecting new information or using it for a new purpose, we will give notice in the extension or on the project homepage in
        advance.
      </P>

      <H2 no={12}>Contact</H2>
      <P>For questions about this policy or to exercise the rights in section 9, contact us in either of these ways:</P>
      <List
        items={[
          <>
            <B>Email</B>: <Mail />
          </>,
          <>
            <B>GitHub issue</B>: <ExtLink href={ISSUES_URL}>github.com/MuShanYu/lingva-image-server-pub/issues</ExtLink>. Issues are
            public, so please do not include personal information that the request does not need.
          </>,
        ]}
      />

      <Footnote>
        Homepage: <ExtLink href={HOMEPAGE}>lingva.mushanyu.xyz</ExtLink> · Email: <Mail /> · The recognition service’s source code is public on{' '}
        <ExtLink href={SERVER_REPO}>GitHub</ExtLink>.
      </Footnote>
    </Page>
  )
}
