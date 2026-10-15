(() => {
    'use strict';
    const logo = '/assets/menu/logo.jpg';
    const files = {
    "2026-04-10-4bd2ea0a-d7d6-4a58-8ae8-d242b8176401.jpg": "logo.jpg",
    "2026-04-10-cc533b9a-25f1-411a-9c15-7904c57e1232.jpg": "menu-280.webp",
    "2026-04-06-f989270f-bb00-4e3f-a5e8-39e299f2d567.png": "menu-280.webp",
    "2026-04-06-a4e0f636-627f-4cf8-bc48-e3c52ee6d8e3.png": "menu-280.webp",
    "2026-04-10-ac1b5188-a333-44e1-b11f-3a2fe3c573b3.jpg": "menu-281.webp",
    "2026-04-10-f8217975-9359-4d77-a85a-5e75d70837e0.jpg": "menu-282.webp",
    "2026-04-10-e047b064-bf84-476e-9898-37c82b79aa29.jpg": "menu-283.webp",
    "2026-04-10-bfa26fdd-8d31-4c98-89d6-4f8b95d930ee.jpg": "menu-284.webp",
    "2026-04-10-ac374236-0a01-4d73-a68c-f3722498ba4f.jpg": "menu-285.webp",
    "2026-04-10-ec6a29ce-f324-4ead-a895-e2548a431034.jpg": "menu-286.webp",
    "2026-04-10-7e0c240c-33d8-4974-82da-d487b99e5cc0.jpg": "menu-287.webp",
    "2026-04-10-c3795deb-a472-4e9e-894e-0654adf499d1.jpg": "menu-288.webp",
    "2026-04-10-e79b868d-2456-413e-b6df-0c10443fde68.jpg": "menu-289.webp",
    "2026-04-10-114ecd7f-0dc7-49d2-a0f1-7661364c8e0d.jpg": "menu-290.webp",
    "2026-04-10-9eac992c-2231-44b4-a558-037254bf74d0.jpg": "menu-291.webp",
    "2026-04-10-1a09030b-caac-4978-bf88-c631ec1aa307.jpg": "menu-292.webp",
    "2026-04-10-b782893a-475e-4439-86c0-db8991c5bf11.jpg": "menu-293.webp",
    "2026-04-10-a4c4d7a8-2c92-4677-af39-7bf32a5bba49.jpg": "menu-294.webp",
    "2026-04-10-7acb0aac-1cc4-4f05-99d9-c6533f1569bf.jpg": "menu-295.webp",
    "2026-04-10-03bc38c0-fccd-49c5-8885-22b52e273265.jpg": "menu-296.webp",
    "2026-04-10-7639dba5-aa7d-4bff-8f7a-bc4716eb4fa6.jpg": "menu-297.webp",
    "2026-04-10-9bb8eb8c-5710-4e01-bfb2-8ccc7ec32954.jpg": "menu-298.webp",
    "2026-04-10-713918d3-0f38-4bb4-9705-1e7fd2b72dca.jpg": "menu-299.webp",
    "2026-04-10-caafba80-41f4-4d16-8352-853f070cab5a.jpg": "menu-300.webp",
    "2026-04-10-44eb4289-8307-4775-9621-e2e0aeaf9d82.jpg": "menu-301.webp",
    "2026-04-10-a058fcef-58bf-4e31-8aba-4564c6f0807d.jpg": "menu-302.webp",
    "2026-04-06-a6c49632-61a1-497b-bd06-062c25251179.png": "menu-302.webp",
    "2026-04-10-1d45ceeb-1825-443a-b7cd-760a1e736adb.jpg": "menu-303.webp",
    "2026-04-10-b30d0157-8012-4f96-b121-dc875e4b1e4d.jpg": "menu-304.webp",
    "2026-04-06-51d37c77-23f8-4847-b2f2-cdb1bc707567.png": "menu-304.webp",
    "2026-04-10-09166ce3-cd6f-4bf3-b430-0fd52037170a.jpg": "menu-305.webp",
    "2026-04-10-43ba75bf-0089-44da-b77b-dee6461e8caf.jpg": "menu-306.webp",
    "2026-04-10-1ee9345b-da4f-4dd9-af99-32da2d492cab.jpg": "menu-307.webp",
    "2026-04-10-c8436730-d692-4964-935f-b942d7657317.jpg": "menu-308.webp",
    "1.jpg": "breakfast.jpg",
    "2026-04-06-d0b6c388-fcdf-40fd-a7dc-56a84b8309a2.png": "logo.jpg",
    "2026-04-06-8dfa0b39-c6e3-47c4-bb0e-b40c2d7e4c39.png": "logo.jpg"
};
    const driveFiles = {
    "1fMDsDam-KvGzfw_1JLVL4IdaUkXyX1wY": "logo.jpg",
    "1yuox3G7-sYqAKe_AcNYeVKtDecseGh-3": "breakfast.jpg",
    "1k7eZ3OINreZ1BK8j5EGSxDlKjVVtx1F8": "breakfast-spread.webp",
    "1ih5fBrcWpRceRWhmd8MAoudI9h9xuqym": "royal-breakfast.webp",
    "1IZZ8bswj_HeE5MkzBi2jXf-wKrk5aHLJ": "mixed-grill.webp",
    "12v17yvHvUiMll1QLRJZYnarQEA3EpC8H": "baklava.webp",
    "11wTkW8Wd5t-I7V1e9Y_N1bncSP5xQELL": "appetizers.webp",
    "1t2u6uc23G-elX_sXiz-ZuV7e0sHVXIDG": "salad.webp",
    "1DT_343L7_zznNgyN5LjN5iuezvuYfySi": "soup.webp",
    "1tuEWn7VohJj0Y9eEdHOnzz_u7CqSOgAj": "pasta.webp",
    "1WM3F0k1KQm1BVcSTyFD6Xf5xMfcx5apZ": "steak.webp",
    "1PXE9NAOvGIjeExzoRRY4dTB_vKhw9GPT": "casserole.webp",
    "1pmkAlg_vfdjAXgMWlwq5rlxvcVBAvu1u": "iskender.webp",
    "1n_AjyksybgvZtZ-xO1L1XkoAOQ8cHFXK": "burgers.webp",
    "1MVZkGPCyry2SOSB0PYe2EnsJGch9CO8u": "international.webp",
    "1EYvwKmI0WmbOI_jyCPDbvMiWh1SuOc6b": "signature.webp",
    "1qK7znn4Ben2PXGgu-m9EeaNfVrR7Tlw9": "sandwich.webp",
    "15qLS6HyHrV8rKLv6Y9IKmKZSavqfUmHu": "menu-279.webp",
    "1AOYwn4bnlYy3XN1cHsFIMRVl3Q9PMKCw": "menu-280.webp",
    "1CoWEwYHADD4D9Zjccq6ICKVbQgM3upFK": "menu-281.webp",
    "1h_MUln1RhSTRPCz2IV5vmuf14M9oeEDC": "menu-282.webp",
    "1XOzeUWn982Jdh2u3PKfdZYSHe-M7Ubc7": "menu-283.webp",
    "1ndj5tJGm933erfuC4evmaj7BP7xXmzbs": "menu-284.webp",
    "16BhjqDhOYyg7FLiNjiScJpBtMF__0TKi": "menu-285.webp",
    "1pTC2jeZqtX8WE6IvMs5BXMx3IjoDSrfP": "menu-286.webp",
    "1_uQhQGb3h4Ewv614ivldayjO_yf_4kWA": "menu-287.webp",
    "1zF3Eifj2KaHrajLTpn2CCYV39QHcXeSE": "menu-288.webp",
    "13fzHBNUQlGt9-Ma4nzLehmyMVyiLjUlo": "menu-289.webp",
    "1kyOTvtmlmGgTqNanPr1TTldwht8b7eFC": "menu-290.webp",
    "1FyrhDUlsjV2moIsbUBDvF4NrRNcBbGzT": "menu-291.webp",
    "1fhonRw4KiB7DhT6spYn2bovzfPpLBGmC": "menu-292.webp",
    "1H1wSiXajNhEZN6wW8xu8MOkArN_LwTWH": "menu-293.webp",
    "17AbRsDPDj7CDWO9s1W8x7h6cFBalhkgQ": "menu-294.webp",
    "1aN7wZHJwBP6o4Xq-qihYJHH14Y7M7g4F": "menu-295.webp",
    "1pO7OJ7biMHxdHANKZxY-zMlmkpDX-kIw": "menu-296.webp",
    "1OSBZb9iDV-IP4k5tU7iQCyhjaFvKjAMf": "menu-297.webp",
    "1EMfp053DGAdL__dMO4e54-mpcev6XhM6": "menu-298.webp",
    "1l5SahF-2Opirl6JK2h8xPVs9WvPpd64e": "menu-299.webp",
    "1JEWvHAhMxS-_lqG8TKgqmzQ55A8hm3-_": "menu-300.webp",
    "1K1NNIrrmPprcmRFqqQC4flGRF0pEFDWm": "menu-301.webp",
    "1fwn7EEX4EJLs_rHo3EBRJoUU72UMOx0M": "menu-302.webp",
    "1Hyv5mYmO-o0cCv-VfFf3H1E8JFDJk04D": "menu-303.webp",
    "1yXJugCEOQ6QluEZvzh4wb_gxAuL2Rr2B": "menu-304.webp",
    "11gVhiTaQmQqERhOHlL9CYTD0GbpySV8n": "menu-305.webp",
    "190xmWy9ri3ePdW5gCz8G0or8p03tegVW": "menu-306.webp",
    "1jUXeJkwGqfJWDSfQmwO1j_eEhHvT7sHH": "menu-307.webp",
    "14o1-WK8qXfiTzLLbtPc8pjV6sw955nWR": "menu-308.webp"
};

    function resolve(value) {
        const source = String(value ?? '').trim();
        if (!source || source.startsWith('#')) return logo;
        if (source.startsWith('/assets/menu/')) return source;
        try {
            const url = new URL(source, window.location.origin);
            if (!['http:', 'https:'].includes(url.protocol)) return logo;
            const filename = decodeURIComponent(url.pathname.split('/').pop());
            const knownHost = url.hostname === 'cdn.phototourl.com' || (url.hostname === 'i.postimg.cc' && url.pathname === '/cJ8NKw8q/1.jpg');
            if (knownHost && files[filename]) return '/assets/menu/' + files[filename];
            if (url.hostname === 'drive.google.com') {
                const id = url.pathname.match(/\/file\/d\/([^/]+)/)?.[1] || url.searchParams.get('id');
                if (id) return driveFiles[id] ? '/assets/menu/' + driveFiles[id] : 'https://lh3.googleusercontent.com/d/' + encodeURIComponent(id);
            }
            if (url.hostname === 'lh3.googleusercontent.com') {
                const id = url.pathname.match(/\/d\/([^/]+)/)?.[1];
                if (id && driveFiles[id]) return '/assets/menu/' + driveFiles[id];
            }
            return url.href;
        } catch {
            return logo;
        }
    }

    function onError(event) {
        const image = event.target;
        // A failed image remains visible; a later language/source change can load it again.
        if (image.getAttribute('src') !== logo) image.setAttribute('src', logo);
    }

    async function masterImages(url) {
        try {
            const response = await fetch(url + '&t=' + Date.now(), { cache: 'no-store', signal: AbortSignal.timeout(20000) });
            if (!response.ok) throw new Error('Image source unavailable');
            const rows = Papa.parse(await response.text(), { header: false, skipEmptyLines: true }).data.slice(1);
            return new Map(rows.filter(row => /^TP-\d+$/.test(String(row[0] || '').trim()))
                .map(row => [String(row[0]).trim(), String(row[6] || '').trim()]));
        } catch (error) {
            console.warn('Could not refresh menu image references', error);
            return new Map();
        }
    }

    window.TaksimImages = { resolve, onError, masterImages, logo };
})();
