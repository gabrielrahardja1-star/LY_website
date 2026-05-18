# The Light Years CDC — Design Brief

## Task
Build a pixel-faithful implementation of the "The Light Years CDC" landing page based on the Figma design. Single long-scroll page, no routing needed beyond the homepage.

---

## SECTION 1 — Navbar
Sticky top. White background 80% opacity, `backdrop-blur`. Rounded pill shape (border-radius: 50px). Logo on left. Nav links on right: Home, Our Services, Blog, Meet the Team, Collaboration. **No login button.**

- Logo: `https://www.figma.com/api/mcp/asset/3aa9e0f2-4080-410c-999c-330b7356c607`

---

## SECTION 2 — Hero
Full-width image background, height ~800px.

- Hero image: `https://www.figma.com/api/mcp/asset/927d9e14-bf97-4900-970f-7ee2f2a4eecf`
- Heading (white, Montserrat Bold, 64px): "Supporting growth at every stage of life"
- Subtext (white 75% opacity, Inter, 24px): "Therapy, Counselling, and Assessment for Children, Teens, and Adults"
- CTA button (orange `#e86500`, rounded pill, border-black): "Make an Appointment Now!"
  - Link: `https://wa.me/6285186055162?text=Hi%2C%20I%27d%20like%20to%20make%20an%20appointment`

---

## SECTION 3 — Why Choose Us?
- Section title (orange, Montserrat ExtraBold, 48px): "Why Choose Us?"
- Center featured image (rounded-48px): `https://www.figma.com/api/mcp/asset/a15f3435-9092-4b76-ad12-e6ba3f9fa6ee`
- 3-column feature grid:

| Icon URL | Title | Description |
|---|---|---|
| `https://www.figma.com/api/mcp/asset/037d6aef-24ec-49a3-b98c-1f4036862574` | Licensed Professionals | Each session is conducted by an experienced psychologist or therapist with a license in their respective field |
| `https://www.figma.com/api/mcp/asset/62f5cfba-228d-4350-b385-4817934147f4` | Bilingual Services | Sessions can be administered using English or Bahasa Indonesia with no added cost |
| `https://www.figma.com/api/mcp/asset/ee43cd2b-5438-4bb3-8d5c-d87defde4fa0` | School Environment | Services are held in a school environment, ensuring the safety and comfort of your children |

---

## SECTION 4 — Our Services: Children
- Title (orange): "Our Services" + subtitle "Children"
- White/light background
- Carousel: 3 cards visible, arrows navigate 1 at a time, loops
- Left arrow: `https://www.figma.com/api/mcp/asset/62d72086-f3d6-4ab3-be66-6981ea45d062`
- Right arrow: `https://www.figma.com/api/mcp/asset/4282b3fb-db32-4b36-b6b2-0e116f684c36`

### Card structure
Each card has:
1. Image (rounded-30px top)
2. Offline / Online badges (brown `#734424` outlined tags)
3. Service title (Montserrat Bold, 25px, brown)
4. Description (Montserrat Medium, 18px, brown)
5. "Includes:" list (Montserrat, 18px)
6. "Book Now!" button (orange `#e86500`, rounded-32px, Montserrat ExtraBold, white)

### Children — 11 Cards

1. **IQ Test**
   - Image: `https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b`
   - Badges: Offline, Online
   - Description: Evaluates the cognitive abilities across various domains for teens and adults
   - Includes: 1.5 hours - 2 hours · Report and consultation
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20an%20IQ%20Test%20session`

2. **School Readiness Test**
   - Image: `https://www.figma.com/api/mcp/asset/ce63a103-f9d4-4c3c-87c3-1ad1f5b5edd7`
   - Badges: Offline, Online
   - Description: Assesses a child's development to determine their readiness to transition from Kindergarten to Primary 1
   - Includes: 60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20School%20Readiness%20Test%20session`

3. **Play Therapy**
   - Image: `https://www.figma.com/api/mcp/asset/b864a2da-2a50-47f1-b8eb-4b0f31520da6`
   - Badges: Offline, Online
   - Description: Aims to resolve emotional and behavioural difficulties, and process traumatic experiences through play-based activities
   - Includes: 60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Play%20Therapy%20session`

4. **Speech Therapy**
   - Image: `https://www.figma.com/api/mcp/asset/869c4d5f-2901-40f5-ab7e-c93203adf17b`
   - Badges: Offline, Online
   - Description: Supports the development of speech, language, and communication skills
   - Includes: 60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Speech%20Therapy%20session`

5. **Behaviour Therapy**
   - Image: `https://www.figma.com/api/mcp/asset/82d5d663-fe43-4f8b-8cc2-edff22409378`
   - Badges: Offline, Online
   - Description: Focuses on changing unhealthy behaviours and promoting emotional regulation
   - Includes: 60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Behaviour%20Therapy%20session`

6. **Occupational Therapy**
   - Image: `https://www.figma.com/api/mcp/asset/86dff934-cc5b-4ea4-8128-e6b404a01b88`
   - Badges: Offline, Online
   - Description: Focuses on building essential skills used for daily activities
   - Includes: 60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20an%20Occupational%20Therapy%20session`

7. **Sensory Integration Therapy**
   - Image: `https://www.figma.com/api/mcp/asset/b5f940b2-72ad-4e4c-a5c5-915c3876e40b`
   - Badges: Offline, Online
   - Description: Helps children to better process and regulate environmental stimuli (Touch, sound, light)
   - Includes: 60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Sensory%20Integration%20Therapy%20session`

8. **Learning Disorder Diagnosis**
   - Image: `https://www.figma.com/api/mcp/asset/4cc4bb3d-24f7-4c83-ab6d-c72756fff360`
   - Badges: Offline, Online
   - Description: Helps children to identify specific cognitive deficits (Reading, writing, or math)
   - Includes: 60 min/session · Daily and monthly report · Report based on assessment · Treatment Plan
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Learning%20Disorder%20Diagnosis%20session`

9. **Consultation**
   - Image: `https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b`
   - Badges: Offline, Online
   - Description: Identifies the child's initial needs and parent's concerns with a psychologist
   - Includes: 60 min/session · Screening + Observation · Report based on assessment · Treatment Plan
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Consultation%20session`

10. **Developmental Screening**
    - Image: `https://www.figma.com/api/mcp/asset/ce63a103-f9d4-4c3c-87c3-1ad1f5b5edd7`
    - Badges: Offline only
    - Description: Assesses the child's general abilities and challenges in relation to their developmental stage
    - Includes: 60 min/session · Interview with parents · Report based on assessment · Treatment plan
    - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Developmental%20Screening%20session`

11. **Developmental Disorder Diagnosis**
    - Image: `https://www.figma.com/api/mcp/asset/b864a2da-2a50-47f1-b8eb-4b0f31520da6`
    - Badges: Offline, Online
    - Description: Assesses the presence of developmental disorders (Autism, ADHD, and others)
    - Includes: 60 min/session · Interview with parents · Report based on assessment · Treatment plan
    - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Developmental%20Disorder%20Diagnosis%20session`

---

## SECTION 5 — Our Services: Teens & Adults
- Same carousel component as Children, reuse `ServicesCarousel`
- Background: purple `#604f94`
- Title (white): "Our Services" + subtitle "Teens & Adults"
- Card text colors adjust for purple bg: titles/descriptions in white or light tones

### Teens & Adults — 8 Cards

1. **IQ Test**
   - Image: `https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b`
   - Badges: Offline, Online
   - Description: Evaluates the cognitive abilities across various domains for teens and adults
   - Includes: 1.5 hours - 2 hours · Report and consultation
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20an%20IQ%20Test%20(Teens%20%26%20Adults)%20session`

2. **Mental Health Check Up**
   - Image: `https://www.figma.com/api/mcp/asset/ce63a103-f9d4-4c3c-87c3-1ad1f5b5edd7`
   - Badges: Offline, Online
   - Description: Comprehensive evaluation of your emotional and psychological well-being
   - Includes: Survey questionnaire · Report and consultation
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Mental%20Health%20Check%20Up%20session`

3. **Anxiety Screening**
   - Image: `https://www.figma.com/api/mcp/asset/86dff934-cc5b-4ea4-8128-e6b404a01b88`
   - Badges: Offline, Online
   - Description: Identify individuals at risk for anxiety, including the severity of symptoms
   - Includes: Survey questionnaire · Report and consultation
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20an%20Anxiety%20Screening%20session`

4. **ADHD Screening**
   - Image: `https://www.figma.com/api/mcp/asset/b5f940b2-72ad-4e4c-a5c5-915c3876e40b`
   - Badges: Offline, Online
   - Description: Identify behaviours of inattention, impulsivity, and hyperactivity
   - Includes: Survey questionnaire · Report and consultation
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20an%20ADHD%20Screening%20session`

5. **Depression Screening**
   - Image: `https://www.figma.com/api/mcp/asset/4cc4bb3d-24f7-4c83-ab6d-c72756fff360`
   - Badges: Offline, Online
   - Description: Identify individuals at risk for depression, including the severity of symptoms
   - Includes: Survey questionnaire · Report and consultation
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Depression%20Screening%20session`

6. **Counselling**
   - Image: `https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b`
   - Badges: Offline, Online
   - Description: Individual counselling conducted by a psychologist
   - Includes: 60 min/session
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Counselling%20session`

7. **Couple Counselling**
   - Image: `https://www.figma.com/api/mcp/asset/82d5d663-fe43-4f8b-8cc2-edff22409378`
   - Badges: Offline, Online
   - Description: Counselling for couples conducted by a psychologist
   - Includes: 60 min/session
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Couple%20Counselling%20session`

8. **Family Counselling**
   - Image: `https://www.figma.com/api/mcp/asset/869c4d5f-2901-40f5-ab7e-c93203adf17b`
   - Badges: Offline, Online
   - Description: Counselling for family members conducted by a psychologist
   - Includes: 60 min/session
   - WA: `Hi%2C%20I%27d%20like%20to%20book%20a%20Family%20Counselling%20session`

---

## SECTION 6 — Our Facilities
- Background: purple `#604f94`
- Title (white, Montserrat ExtraBold, 48px): "Our Facilities"
- Horizontal image carousel, 3 images visible at a time, with left/right arrows
- Facility images:
  - `https://www.figma.com/api/mcp/asset/501e6f69-90c2-40f6-a009-5c51cad8798c`
  - `https://www.figma.com/api/mcp/asset/2a012ee6-ed6a-4153-b1f7-34bdc10b9783`
  - `https://www.figma.com/api/mcp/asset/d16dfd61-9b32-4fc8-9442-f06d006c2bbf`
  - `https://www.figma.com/api/mcp/asset/4282b3fb-db32-4b36-b6b2-0e116f684c36`

---

## SECTION 7 — Meet Our Team
- Background: purple `#604f94`
- Title (white, Montserrat ExtraBold): "Meet Our Team"
- Grid of 7 members. Each card: circular avatar, role (gold `#ffd972`, Montserrat Bold), name (white, Montserrat Bold, 25px), credential (white)

| Avatar URL | Role | Name | Credential | Note |
|---|---|---|---|---|
| `https://www.figma.com/api/mcp/asset/ca4840aa-155b-429f-b709-424641c3a07e` | Head of Psychological Interventions | Octavia Fitri Prasantami | M.Psi., Psikolog | |
| `https://www.figma.com/api/mcp/asset/fcb28ef2-ceae-4291-9613-068bc1d52d3a` | Psychologist | Ni Ketut Desi Ariani | M.Psi., Psikolog | |
| `https://www.figma.com/api/mcp/asset/39b2dce1-ffc0-4c85-813b-55af184deb90` | Play Therapist | Ni Ketut Septiaryani | S.IP, M. KESOS | *Certified Therapist |
| `https://www.figma.com/api/mcp/asset/f8465729-23ee-4ab4-a455-8a9097c5e1b0` | Occupational Therapist | Adinda Cyntia Yunica | A.Md., O.T | |
| `https://www.figma.com/api/mcp/asset/913d81f6-0186-4f0e-ae0c-d7a7443cbb8d` | Occupational Therapist | Utami Rahayu | Amd. OT | |
| `https://www.figma.com/api/mcp/asset/7799ace0-4982-475a-b664-0ae781e14572` | Occupational Therapist | Rimadina Zifaati Choiriah | S.Tr. Kes | |
| `https://www.figma.com/api/mcp/asset/4d91cff8-b920-4526-89b0-28c9db547474` | Speech Therapist | Inggar Rospita Sanatri | A.Md., Kes | |

---

## SECTION 8 — What We Do?
- White background
- Title (orange, Montserrat ExtraBold, 48px): "What We Do?"
- 2×2 card grid. Each card: photo (rounded top) + title (Inter Medium, 24px) + description (Inter Regular, gray `#828282`)

| Image URL | Title | Description |
|---|---|---|
| `https://www.figma.com/api/mcp/asset/5ccbf4a0-68a1-47e4-a753-16eddff28222` | Seminar & Workshops | We host regular seminars and workshops for parents, educators, and the community on child development and mental health topics. |
| `https://www.figma.com/api/mcp/asset/bf181a8a-ac8b-405c-bc99-ea5ec07790b7` | Community Event | We actively participate in and organize community events to raise awareness around child development and psychological well-being. |
| `https://www.figma.com/api/mcp/asset/9f24fdf1-79f4-4d4b-8577-ee1b5cfb6266` | Baby Class & Playing Class | Structured play-based classes designed to support the physical, cognitive, and social development of babies and toddlers. |
| `https://www.figma.com/api/mcp/asset/3f95cd1f-8b19-479d-94ef-abff35d7b6fe` | School Collaboration | We partner with schools to provide on-site psychological support, teacher training, and student assessments through TKS & Minat Bakat programs. |

---

## SECTION 9 — What People Say About Us?
- White background
- Title (purple `#604f94`, Montserrat ExtraBold, 48px): "What People Say About Us?"
- Horizontal carousel: 3 cards visible, arrows navigate, loops
- Arrow images same as services carousel

### Testimonials

1. **Mom "B"** — *Terapi Okupasi*
   > "Di The Light Years berbeda dengan tempat terapi lainnya, Coachnya sangat komunikatif penyampaian laporan tiap terapi sangat sistematis dan mudah di mengerti agar bisa diterapkan dirumah juga. Syukur Alhamdulillah, anak saya sudah ada kemajuan komunikasi nya semakin lancar dan nyambung. Oleh sebab itu saya percayakan terapi anak saya untuk continue di The Light Years. Semoga The Light Years semakin sukses ❤️"

2. **Mom Aro** — *Observasi anak*
   > "Kami berkonsultasi dengan psikolog dari The Light Years karena kami sebagai orangtua merasa sepertinya ada yang tidak baik-baik saja dengan perkembangan bahasa Aro. Setelah berkonsultasi dan juga dilakukan observasi, kami merasa hasil observasi nya detail dan saran-sarannya membuat kami sebagai orangtua mengetahui bagaimana kami bisa membantu Aro dalam perkembangan bahasa nya. Terima kasih banyak The Light Years! Sukses selalu untuk The Light Years!"

3. **Mom Astrid** — *Konsultasi*
   > "Thank you The Light Years, because now we understand our son better and we know we're on the right path. The counselor explained everything with empathy and clarity. Our son seemed to enjoy his time and felt comfortable during the session, which means a lot to us as parents."

---

## SECTION 10 — Footer
- Background: `#e2e1ef`
- 3-column layout

**Left — Logo**
- Image: `https://www.figma.com/api/mcp/asset/3aa9e0f2-4080-410c-999c-330b7356c607`
- Width: ~465px

**Center — Location**
- Header (purple `#604f94`, Montserrat ExtraBold, 28px): "Location:"
- **Tebet** (Montserrat Bold, 14px, dark purple `#3a2e69`): Jl. Prof. DR. Soepomo No.11A, RT.12/RW.3, Tebet Barat, Jakarta Selatan
- **Pagedangan** (Montserrat Bold, 14px, dark purple): Jl. Kp. Cicayur I, RT.001/RW.002, Kec. Pagedangan, Kabupaten Tangerang, Banten

**Right — Contact Us**
- Header (purple `#604f94`, Montserrat ExtraBold, 28px): "Contact Us:"
- Instagram icon + @thelightyears.id → `https://instagram.com/thelightyears.id`
- WhatsApp icon + +62 851 8605 5162 → `https://wa.me/6285186055162`
- Email icon + admin@thelightyearscdc.com → `mailto:admin@thelightyearscdc.com`
- Icon URLs:
  - Instagram: `https://www.figma.com/api/mcp/asset/cb176437-ed00-4a58-8eb2-ddee5e20102e`
  - WhatsApp: `https://www.figma.com/api/mcp/asset/7694ce63-9aa5-4a79-8e1f-6c7feddf19c5`
  - Email: `https://www.figma.com/api/mcp/asset/6b285159-6231-4ff6-99d7-8a7a7a1dbcaf`

---

## Implementation Notes
- All carousels use React `useState` to track index, slide 1 at a time, loop back to start
- Navbar becomes sticky + adds shadow after scrolling past hero (use `useEffect` + scroll listener)
- Nav links use smooth scroll to `#section-id` anchors
- `next/image` with `unoptimized={true}` for all external Figma image URLs
- Add `// TODO: Replace Figma asset URLs with permanent hosted images before deploying` comment at top of any file using Figma URLs
- No backend, no API routes, no database — purely static

## Image Asset Reminder
> ⚠️ Figma MCP image URLs expire in 7 days. Download all images and move to `/public/images/` before going live. Update all `src` props accordingly.
