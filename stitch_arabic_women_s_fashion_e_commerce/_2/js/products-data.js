// Product Catalog Database for Celine Fashion (سيلين للأزياء)
const STORE_PRODUCTS = [
  {
    id: "dress",
    title: "فستان سهرة انسيابي راقٍ",
    shortTitle: "فستان سهرة انسيابي راقٍ",
    category: "فساتين ومناسبات",
    categorySlug: "dresses",
    badge: "جديد الموسم",
    scarcityBadge: "كمية محدودة جداً – احجزي قطعتكِ قبل نفاد المخزون",
    price: 580,
    originalPrice: 740,
    rating: 4.9,
    reviewsCount: 128,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1vPclDFyCfiJzPENQx44XFfEQ1GxMFsc6GV1wxiv5OXTHo8PqhFk5W1hF_LKV1pNna5lsZkp7UsYFW-sbkgy3IcVvmFsEzZRnxA6ZMpVyLD5VgQJ-6chiqhJDLrPIGf4o9YmCngbLnMU1xzftXmfH8uC68QrLM9WYoTCJPstdXEqj4bgfLs2PHeS-Ae0GXDvGPSqxZaKFwrznty6SOFHTb3MhkD17boW1vsFK8Qw",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ftQbwZ0uwDHs4LDYbnG8tVME6QKYWWqbvBxO257BaZ5h1OTd3wZPp_4Qc1PM8InRWEL0WRSdlDJFQSllzqdzz02LVBawiih8Ua-oWJxwZ3b430Hr69v1R2nXtOhRHO6hs5-W_sjyxm--MQdJ_HkkQpiJrHxB2cSgD3cur3z0lwXHtEPNU9Fv4H8jC9Qww1yKK5tIm5NKfK3KN2JpfY67scx1cVe3_wwnEQ0hpnc",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqhOKCaOiSkcCNWZ5fFf_-qKZ1jn7ghDtR19ReEvgYTyMYJ-aKFwJkB1Tb57rB-L73awZxYAriwhFX9xMOZXh6GmKEQR_ZD-WUFgVzRvLSSXVqOQI5VFnEtSOgqg3156QHgZkcrZ9qkkFnyg7rLDCVfOe1ODwYJ8W4NH53t4oe3S419o_KGhz9JZlBLsreIObT1B494XVdFrhupDZiZ1xmTa1aoY3SVPbC1dOQcYw",
        label: "الأمامي",
        alt: "إطلالة فستان السهرة من الأمام"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZwYcA-Pbijref5Rar-4wqSPCpMBnjuZFdjGmG1wlFKTSk-SOhnR2PIDAegx5jfR-fGLAgzefiqQGb43ykEL31MNaXv0r9MU9angI7VHB-k9FQvjHMFHSEqeztRSUFai58VCl1s-DrF4X0zM-M-TH1g8NBZfcMgreAbPVcuCprh-m84y7BG4WsjQlFfx1gmZLntayPJ_mpa71B2AERO80xPF9CQAxgu0oo1ulu23Q",
        label: "الخلفي",
        alt: "إطلالة فستان السهرة من الخلف"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD15WjnKPqQzK_V-obvvUlByfkCe904DunXUPpm3VI_v7jEdOh636ZoVixsyeTSDAhZhyGfNRmFIvATL5iMTefGA9OPIfCB_80mljj9qGD6o6Xi0sv6lIu7_C-Jht5lcPVvAuwfd3LIW8RDwYlA8Z8D719Iri7XvUvvZlnwiTWdC1HmSO7yKgNGur_gSG87C-mwcbzZrJ4gw09JDC56TI4WLrIINQAmBlIawl7xCy8",
        label: "الخامة",
        alt: "تفاصيل نسيج الحرير الدقيقة"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1WyAlYH-nXLocXHYfMKPDLfsvM2DWu_L-tt7-INruR-dRR_eEydDr9OqxEtRwM3qcTaoIXbaCnUuU-wM0_Dx7FKiDaUr6mXX47pxRnlR1hpjQvzQobXbItpDP1dwxdt8bXwckHzeORGSTq6fvj63IoNINJ4HoNCYraPOv2PEZy3ZIhjsUVmzA58QhQYQ1oduyJUFLrRDNeqejxGX-8XRTP0ufVzI3PLCC3i0hxiE",
        label: "الحركة",
        alt: "حركة وانسيابية الفستان أثناء المشي"
      }
    ],
    description: "بقصة مدروسة تبرز جمال الإطلالة بنعومة وانسيابية، مع تفاصيل راقية للمناسبات المميزة.",
    longDescription: "قطعة استثنائية صُممت بعناية لتحاكي نعومة الحرير مع ثنيات انسيابية تمنح القوام رشاقة وأناقة ملكية تناسب أرقى المناسبات الشرقية والغربية. تتميز بياقة ناعمة وتفاصيل درابيه متقنة تُظهر جمال القوام باحتشام راقٍ.",
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "S",
    colors: [
      { name: "شامبين دافئ (Champagne Gold)", hex: "#E5CF9F" },
      { name: "بيج رملي هادئ (Soft Beige)", hex: "#E8DEC8" },
      { name: "فحمي ليلي ملكي (Night Charcoal)", hex: "#2C2B2A" },
      { name: "تيراكوتا ترابي (Dusty Terracotta)", hex: "#A36D61" }
    ],
    defaultColor: "شامبين دافئ (Champagne Gold)",
    fabric: "حرير الباريس المعالج بلمعان دافئ وناعم غير شفاف، مع بطانة داخلية خفيفة وقابلة للتنفس من خيوط الفيسكوز الفاخر لتوفير انسيابية وراحة مطلقة طوال الأمسية.",
    stylingTips: "لإطلالة ملكية متكاملة، نسقيه مع أقراط متدلية من الذهب الأصفر أو اللؤلؤ الطبيعي، وحذاء كعب عالي بتدرجات النيود أو الذهبي المات، مع حقيبة كلاتش صغيرة بلون الشامبين.",
    careInstructions: [
      "يُغسل يدوياً بماء بارد وبشامبو خاص بالأقمشة الحساسة، أو عبر التنظيف الجاف (Dry Clean).",
      "يُمنع استخدام المبيضات أو التجفيف الآلي بالحرارة العالية.",
      "يُكوى بالبخار الرأسي بدرجة حرارة منخفضة للحفاظ على لمعان النسيج."
    ],
    featured: true,
    isNew: true
  },
  {
    id: "tshirt",
    title: "تيشيرت قطني ناعم وفاخر",
    shortTitle: "تيشيرت قطني ناعم وفاخر",
    category: "ملابس كاجوال",
    categorySlug: "casual",
    badge: "من أكثر القطع طلباً هذا الأسبوع",
    scarcityBadge: "طلب متزايد – تبقى عدد محدود من القطع",
    price: 185,
    originalPrice: 220,
    rating: 4.8,
    reviewsCount: 94,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxVD8GDbeucpEukypiNV3kqS4RSbaeP3M4bdIDjeJDaCZB6gFbznCVFMnFq9gkyOOcZmnbDZaGFaJZsb92JZcSeothOgkdBl89C_ur13rvs5dd_Dw_3r9iIkdot7ptGnizD4DKMqti_sb1KeijVA4PeIysB4mbUoTwdGKvY7gOdNufZ5_nwqFUDX2JS6fyvMZlSSx3_WayvvOSY4BrS5dwkUyNd2PeId3XXavn1Ms",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxVD8GDbeucpEukypiNV3kqS4RSbaeP3M4bdIDjeJDaCZB6gFbznCVFMnFq9gkyOOcZmnbDZaGFaJZsb92JZcSeothOgkdBl89C_ur13rvs5dd_Dw_3r9iIkdot7ptGnizD4DKMqti_sb1KeijVA4PeIysB4mbUoTwdGKvY7gOdNufZ5_nwqFUDX2JS6fyvMZlSSx3_WayvvOSY4BrS5dwkUyNd2PeId3XXavn1Ms",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxVD8GDbeucpEukypiNV3kqS4RSbaeP3M4bdIDjeJDaCZB6gFbznCVFMnFq9gkyOOcZmnbDZaGFaJZsb92JZcSeothOgkdBl89C_ur13rvs5dd_Dw_3r9iIkdot7ptGnizD4DKMqti_sb1KeijVA4PeIysB4mbUoTwdGKvY7gOdNufZ5_nwqFUDX2JS6fyvMZlSSx3_WayvvOSY4BrS5dwkUyNd2PeId3XXavn1Ms",
        label: "الأمامي",
        alt: "تيشيرت قطني ناعم"
      }
    ],
    description: "قطعة أساسية لا غنى عنها في خزانتكِ. خامة قطنية مريحة على البشرة، تحافظ على شكلها بعد الغسيل.",
    longDescription: "صُمم هذا التيشيرت من أندر خيوط القطن العضوي طويل التيلة ليوفر لكِ ملمساً كالحرير على البشرة وتهوية ممتازة تدوم طوال ساعات يومكِ الشاق أو المشاوير الهادئة.",
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",
    colors: [
      { name: "أوف وايت ناعم", hex: "#FAF9F6" },
      { name: "بيج رملي", hex: "#EAE5DF" },
      { name: "فحمي كلاسيكي", hex: "#1A1A1A" }
    ],
    defaultColor: "أوف وايت ناعم",
    fabric: "قطن عضوي ١٠٠٪ معالج ضد الانكماش والوبر، حياكة مزدوجة للأكمام والياقة تضمن ثبات الشكل.",
    stylingTips: "مثالي للارتداء مع بنطال كتان واسع، أو أسفل بليزر كاجوال أو كاب عباية مفتوح لمظهر كلاسيكي مرتب.",
    careInstructions: [
      "يُغسل آلياً بماء فاتر مع ألوان مماثلة.",
      "يُفضل التجفيف الطبيعي بالظل لتفادي بهتان اللون.",
      "كوي بدرجة حرارة متوسطة."
    ],
    featured: true,
    isNew: false
  },
  {
    id: "casual-set",
    title: "طقم كاجوال عصري وعملي",
    shortTitle: "طقم كاجوال عصري وعملي",
    category: "ملابس كاجوال",
    categorySlug: "casual",
    badge: "كمية محدودة",
    scarcityBadge: "كمية محدودة – إصدار موسمي متميز",
    price: 395,
    originalPrice: 460,
    rating: 4.9,
    reviewsCount: 76,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEPKS5RQauB2psnbk4JjbLjOBCH1qGF3yJwJ78e3Ci-tFs1-REbLqpmFM4hTTEnK-FGzyYVxVJgaCUUThXRvVtjtc1Yr6ito5tE0RdpSmja5XJ7qY9NZI-8j_VYGJGywopsUn6kduNrma5dK35fD-l4uU58mQYBMX3FaQlPYCoeadfHMQOk9Xwn4zQvrb_KkKZrV7sAFI_cjzauJ4HhycQKbPtBEWAtCEd4iSyPbY",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdBF6TZMcXL5S6zqr91RgtGmGzaF4bLy93lk3YFbfIzY-6g4Yw8BRP_5OCamlLPuNsIOT-dXZit_Lp8jaOJyq0z209ZCAOoa2tAtaFI4s26pWsG_TPy8b3BckgwvkGr7OpZf5dPRV1HStFW0C24B4H8Z6oW0xOr8KIsY54ThPGQLQTzkae09Lj1fLoaox4IDl7llqamkdV7HKmYKJB1mz6-4h0fL7EiFuTk-WQjHc",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEPKS5RQauB2psnbk4JjbLjOBCH1qGF3yJwJ78e3Ci-tFs1-REbLqpmFM4hTTEnK-FGzyYVxVJgaCUUThXRvVtjtc1Yr6ito5tE0RdpSmja5XJ7qY9NZI-8j_VYGJGywopsUn6kduNrma5dK35fD-l4uU58mQYBMX3FaQlPYCoeadfHMQOk9Xwn4zQvrb_KkKZrV7sAFI_cjzauJ4HhycQKbPtBEWAtCEd4iSyPbY",
        label: "الأمامي",
        alt: "طقم كاجوال عصري قطعتين"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdBF6TZMcXL5S6zqr91RgtGmGzaF4bLy93lk3YFbfIzY-6g4Yw8BRP_5OCamlLPuNsIOT-dXZit_Lp8jaOJyq0z209ZCAOoa2tAtaFI4s26pWsG_TPy8b3BckgwvkGr7OpZf5dPRV1HStFW0C24B4H8Z6oW0xOr8KIsY54ThPGQLQTzkae09Lj1fLoaox4IDl7llqamkdV7HKmYKJB1mz6-4h0fL7EiFuTk-WQjHc",
        label: "في الطبيعة",
        alt: "تنسيق الطقم الكاجوال في الهواء الطلق"
      }
    ],
    description: "مصمم ليمنحكِ حرية الحركة وأناقة مرتبة في آنٍ واحد. مثالي للمشاوير السريعة والجامعة.",
    longDescription: "يتألف الطقم من قميص انسيابي بأزرار مخفية وبنطال بقصة مستقيمة مريحة مع حزام خصر مرن، مصمم بخامة كتان قطني بارد ومناسب لأجواء مدن الخليج الصيفية والمعتدلة.",
    sizes: ["S", "M", "L"],
    defaultSize: "M",
    colors: [
      { name: "بيج رملي دافئ", hex: "#E5DEC9" },
      { name: "بني موكا", hex: "#6E5446" }
    ],
    defaultColor: "بيج رملي دافئ",
    fabric: "مزيج الكتان الطبيعي والقطن الناعم المعالج ضد التجاعيد الشديدة لراحة تدوم طوال اليوم.",
    stylingTips: "ارتديه مع حذاء سنيكرز أبيض أو صندل جلدي مفتوح وحقيبة توت كتانية لإطلالة صباحية مفعمة بالحيوية.",
    careInstructions: [
      "غسيل يدوي أو آلي خفيف بدرجة حرارة ٣٠ مئوية.",
      "كوي خفيف بالبخار للحصول على رونق الكتان الطبيعي."
    ],
    featured: true,
    isNew: true
  },
  {
    id: "abaya",
    title: "عباية يومية بأناقة محتشمة",
    shortTitle: "عباية يومية بأناقة محتشمة",
    category: "عبايات ومحجبات",
    categorySlug: "abayas",
    badge: "الأكثر مبيعاً",
    scarcityBadge: "طلب مرتفع جداً – تسوق سريع متوقع",
    price: 420,
    originalPrice: 480,
    rating: 5.0,
    reviewsCount: 210,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-pVoj_IpJqzlTYME_kLOI4lOlVMfRKa1JhCoZaOpH7tMiolIEPDxJyNFMsDtk1kSKLqQ1BJHsftTYr-KCLKu3kOhiQdIufEX1Bpmolq7pBfwdZAzbCAfQk-_vJoEvIMRfSAu62SvAlojvaJsVe6-RWxVZJEBFCy9cgGdpBMbHxp5ohzYl6hP3cWGTPSG55peqq5UhU5XqJcTABoJCdiAQtkpiLq9TWph_PFWSJBo",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKrULkSoKGeOj5P_kPGty9lqDOT6hjlzurOQ_fsoB-dpjH6PRJBvB1OWCJ9gFmxAVmAZAIL7djc_V0jhvEo9JLqoDtu5SenAsfnrFFXsg6nv6V5lLkDo-OgC-vAm4kVHqESfTkJC30771cnoJ05-MZqWWoBoxdjiZx9MHfGq7htIyuN2l-tgLMGsM3dIPiQ-SuUm_d_ImfHYavccnznJA1CqaOJhxPmVazF4vxtlY",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-pVoj_IpJqzlTYME_kLOI4lOlVMfRKa1JhCoZaOpH7tMiolIEPDxJyNFMsDtk1kSKLqQ1BJHsftTYr-KCLKu3kOhiQdIufEX1Bpmolq7pBfwdZAzbCAfQk-_vJoEvIMRfSAu62SvAlojvaJsVe6-RWxVZJEBFCy9cgGdpBMbHxp5ohzYl6hP3cWGTPSG55peqq5UhU5XqJcTABoJCdiAQtkpiLq9TWph_PFWSJBo",
        label: "الأمامي",
        alt: "عباية كلاسيكية سوداء راقية"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqZjDXgeUjjS0xq35m39fW4buY6LJYyW-BrxWTVFY_zZgti1Sfv4XrstQbGI-vNJACbt6Ig7mTL_Lj8I8jIdrmXyIpqa_FCbFYMu7uie7a60LwMkXOhy3SIulZItJlOPPCFi6f0DHroISLYyMZmH3vINWCQlMurDG3Sq_m2mCKYPNq8HOZVF4efE5N5-ZLDzQJQ1SGESrr_WiYYdpqoes9xzQOnPx1QtCuJ6WyzwE",
        label: "الشارع / لايف ستايل",
        alt: "إطلالة العباية اليومية في المدينة"
      }
    ],
    description: "تجمع بين الانسيابية والستر والذوق الهادئ، بخامة مريحة ومناسبة للاستخدام اليومي.",
    longDescription: "عباية كلاسيكية بقصة نص كلوش منسدلة، منسوجة من قماش الكريب الملكي الفاخر بلون أسود داكن غير شفاف، لا تتجعد بسهولة وتمنحكِ هيبة وأناقة متزنة في كل خطوة.",
    sizes: ["52", "54", "56", "58"],
    defaultSize: "54",
    colors: [
      { name: "أسود ملكي فاخر", hex: "#1A1A1A" },
      { name: "كحلي ليلي عميق", hex: "#1C2433" }
    ],
    defaultColor: "أسود ملكي فاخر",
    fabric: "كريب ملكي أصلي خفيف وبارد على الجسم، مع سوار أكمام مريح ومبطن بحرير ناعم.",
    stylingTips: "تأتي مع طرحة متناسقة مجاناً. نسقيها مع حقيبة جلدية فخمة وحذاء بكعب متوسط لدوامكِ أو خروجاتكِ.",
    careInstructions: [
      "غسيل يدوي مقلوب بماء بارد وشامبو عبايات مخصص.",
      "تُعلق على علاقة مبطنة وتُجفف في الظل للحفاظ على سوادها الداكن."
    ],
    featured: true,
    isNew: false
  },
  {
    id: "kaftan",
    title: "قفطان الحرير الإيطالي الممتاز",
    shortTitle: "قفطان الحرير الإيطالي",
    category: "فساتين ومناسبات",
    categorySlug: "dresses",
    badge: "إصدار استثنائي",
    scarcityBadge: "إصدار محدود – حصري لسيلين",
    price: 740,
    originalPrice: 890,
    rating: 5.0,
    reviewsCount: 42,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2zp4R3fqjybkrHPOnB9wOxHDVsSvPArhFUdcq24XzaoBoxGOtD-JIyhzYepOO08naRqpsgnZNd2CurbuoJqdtBiz8CPoA0cKEGqROJWqtzf84evIBNF7ZJZGFhci_O4mvbWeYeovVMc-k_XAkI2loE95PPZd8hwSZeJEaoUK4Ad_-SPkw1jK8_BWFsRKjG5z1LFfPeu47Ot8y-a3GexEpPjBwRkJg5rRDLQaiceo",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2zp4R3fqjybkrHPOnB9wOxHDVsSvPArhFUdcq24XzaoBoxGOtD-JIyhzYepOO08naRqpsgnZNd2CurbuoJqdtBiz8CPoA0cKEGqROJWqtzf84evIBNF7ZJZGFhci_O4mvbWeYeovVMc-k_XAkI2loE95PPZd8hwSZeJEaoUK4Ad_-SPkw1jK8_BWFsRKjG5z1LFfPeu47Ot8y-a3GexEpPjBwRkJg5rRDLQaiceo",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2zp4R3fqjybkrHPOnB9wOxHDVsSvPArhFUdcq24XzaoBoxGOtD-JIyhzYepOO08naRqpsgnZNd2CurbuoJqdtBiz8CPoA0cKEGqROJWqtzf84evIBNF7ZJZGFhci_O4mvbWeYeovVMc-k_XAkI2loE95PPZd8hwSZeJEaoUK4Ad_-SPkw1jK8_BWFsRKjG5z1LFfPeu47Ot8y-a3GexEpPjBwRkJg5rRDLQaiceo",
        label: "الأمامي",
        alt: "قفطان الحرير الإيطالي الممتاز"
      }
    ],
    description: "إصدار استثنائي من الحرير الإيطالي المطرز بدقة عالية، يعكس الفخامة الشرقية بلمسات معاصرة.",
    longDescription: "تحفة فنية من ورش تصميم سيلين، تدمج بين الحرير الإيطالي الطبيعي والتطريز اليدوي على الأكمام والصدر، لتكوني محط الأنظار في المناسبات الكبرى وحفلات العائلة الفاخرة.",
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",
    colors: [
      { name: "شامبين عاجي", hex: "#E8DEC8" },
      { name: "أخضر زمردي", hex: "#1A3B2B" }
    ],
    defaultColor: "شامبين عاجي",
    fabric: "حرير إيطالي ١٠٠٪ مع خيوط القصب الذهبية المقاومة للتآكل.",
    stylingTips: "نسقيه مع حذاء ذهبي بكعب عالٍ ومجوهرات من الألماس أو الذهب الخالص لمظهر ملكي مترف.",
    careInstructions: ["تنظيف جاف فقط (Dry Clean Only)."],
    featured: false,
    isNew: true
  },
  {
    id: "abaya-cloak",
    title: "كاب أورجانزا شفاف مطرز بالخيوط الذهبية",
    shortTitle: "كاب أورجانزا شفاف مطرز",
    category: "عبايات ومحجبات",
    categorySlug: "abayas",
    badge: "تنسيق مثالي",
    scarcityBadge: "متوفر بكمية محدودة",
    price: 390,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 31,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW0DKa3aBblFEQE0K1_SWj4_ee61mA6x6xnF5E7aUkN9zRKTX20QNyBX4vmYxk82b3ugJkfxHT5Oe3i9GfIprNwwsTCiRx87_dQRaEslN8LHelxTSej0q8Gi3QjkkUsIo-aSWNzYY5W2x1hTGo9NGzljsRvnsaRz0IZrucJ4YIZ8MLJrDxeqW9vjhnQh7icgFBIn6dHYW0bbQbits6XTlSNu58o8XPnPFlM80zfPg",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW0DKa3aBblFEQE0K1_SWj4_ee61mA6x6xnF5E7aUkN9zRKTX20QNyBX4vmYxk82b3ugJkfxHT5Oe3i9GfIprNwwsTCiRx87_dQRaEslN8LHelxTSej0q8Gi3QjkkUsIo-aSWNzYY5W2x1hTGo9NGzljsRvnsaRz0IZrucJ4YIZ8MLJrDxeqW9vjhnQh7icgFBIn6dHYW0bbQbits6XTlSNu58o8XPnPFlM80zfPg",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW0DKa3aBblFEQE0K1_SWj4_ee61mA6x6xnF5E7aUkN9zRKTX20QNyBX4vmYxk82b3ugJkfxHT5Oe3i9GfIprNwwsTCiRx87_dQRaEslN8LHelxTSej0q8Gi3QjkkUsIo-aSWNzYY5W2x1hTGo9NGzljsRvnsaRz0IZrucJ4YIZ8MLJrDxeqW9vjhnQh7icgFBIn6dHYW0bbQbits6XTlSNu58o8XPnPFlM80zfPg",
        label: "الأمامي",
        alt: "كاب أورجانزا شفاف مطرز"
      }
    ],
    description: "كاب خفيف وفاخر يضفي لمسة من الغموض والأناقة الملكية فوق فساتين السهرة.",
    longDescription: "صُمم كقطعة تكميلية فاخرة تُرتدى فوق فساتين السهرة لإضفاء لمسة حشمة راقية وأثيرية على الإطلالة.",
    sizes: ["مقاس موحد (Free Size)"],
    defaultSize: "مقاس موحد (Free Size)",
    colors: [
      { name: "شامبين شفاف", hex: "#EAE5DF" }
    ],
    defaultColor: "شامبين شفاف",
    fabric: "أورجانزا حريرية فرنسية فاخرة بتطريز يدوي ذهبي.",
    stylingTips: "مثالي للتنسيق مع فستان السهرة الانسيابي لحضور حفلات الزفاف.",
    careInstructions: ["تنظيف جاف فقط."],
    featured: false,
    isNew: false
  },
  {
    id: "pearl-earrings",
    title: "أقراط لؤلؤ باروكي مطلي بالذهب عيار 18",
    shortTitle: "أقراط لؤلؤ باروكي",
    category: "إكسسوارات",
    categorySlug: "accessories",
    badge: "مجوهرات راقية",
    scarcityBadge: "قطع محدودة مصوغة يدوياً",
    price: 220,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 57,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQw7TtHWDMA14mP0tQzCcECmL2Pu1WORPJ0NrKBpMwQ1ZPUmKfC-WvIanu2Yp09JQ0DygyaAWfNuJwpugclWA4CBgIPD34ZlBW9sEzBq1KyzZ0dq7X1NNQRWqwkAvMFgrv47_WVWkyt5XJY9vTxYFKxYWxomVbrQLg__275z4OyYYh5a0D1NUPe6yLc3j-2dWXIZABOivvgEP8XggL9EAEE3SHeHwkaE3YTrX-CqQ",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQw7TtHWDMA14mP0tQzCcECmL2Pu1WORPJ0NrKBpMwQ1ZPUmKfC-WvIanu2Yp09JQ0DygyaAWfNuJwpugclWA4CBgIPD34ZlBW9sEzBq1KyzZ0dq7X1NNQRWqwkAvMFgrv47_WVWkyt5XJY9vTxYFKxYWxomVbrQLg__275z4OyYYh5a0D1NUPe6yLc3j-2dWXIZABOivvgEP8XggL9EAEE3SHeHwkaE3YTrX-CqQ",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQw7TtHWDMA14mP0tQzCcECmL2Pu1WORPJ0NrKBpMwQ1ZPUmKfC-WvIanu2Yp09JQ0DygyaAWfNuJwpugclWA4CBgIPD34ZlBW9sEzBq1KyzZ0dq7X1NNQRWqwkAvMFgrv47_WVWkyt5XJY9vTxYFKxYWxomVbrQLg__275z4OyYYh5a0D1NUPe6yLc3j-2dWXIZABOivvgEP8XggL9EAEE3SHeHwkaE3YTrX-CqQ",
        label: "الأمامي",
        alt: "أقراط لؤلؤ باروكي مطلية بالذهب"
      }
    ],
    description: "لؤلؤ طبيعي بشكل باروكي فريد، مطلي بذهب عيار ١٨ بلمعان شامبين مطفأ ومقاوم للتحسس.",
    longDescription: "تُصاغ كل قطعة يدوياً بحيث لا تتشابه حبتان من اللؤلؤ الطبيعي، مما يجعل قطعتكِ متفردة تماماً كإطلالتكِ.",
    sizes: ["حجم موحد"],
    defaultSize: "حجم موحد",
    colors: [
      { name: "ذهب شامبين عيار 18", hex: "#C5A059" }
    ],
    defaultColor: "ذهب شامبين عيار 18",
    fabric: "فضة استرليني 925 مطلية بطبقات سميكة من الذهب عيار 18 ولؤلؤ باروكي مائي طبيعي.",
    stylingTips: "تليق مع تسريحات الشعر المرفوعة لتسليط الضوء على انعكاس اللؤلؤ الطبيعي على عنقكِ.",
    careInstructions: ["تجنبي رش العطور أو الكحول مباشرة على سطح اللؤلؤ."],
    featured: false,
    isNew: false
  },
  {
    id: "clutch",
    title: "حقيبة كلاتش ميتاليك بلمعان ذهبي ناعم",
    shortTitle: "حقيبة كلاتش ميتاليك",
    category: "إكسسوارات",
    categorySlug: "accessories",
    badge: "حقائب سهرة",
    scarcityBadge: "الكمية المتبقية: ٥ قطع فقط",
    price: 285,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 39,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDciPmSbjjVnibqOhhMOu9FjMH19INtI0AKXD7iBpn7vxvHBMNKsAn_Oa3QMB2OdDrWmE-okmB2GWiZ3maym0w_cxqH_1-K_j6imkuV6-vm6JcAOiAgorrcphQkHEjU3Ar2NJ6gXfdGBooi7j4aGbsf7ckLf5-FkW-zzdlEFCnbAPcLh3Ps3apP6RaZnfenc6dc0GI8sBjQx_HNTxQzmS8nBZHrbIHDxJpErsV5AWQ",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDciPmSbjjVnibqOhhMOu9FjMH19INtI0AKXD7iBpn7vxvHBMNKsAn_Oa3QMB2OdDrWmE-okmB2GWiZ3maym0w_cxqH_1-K_j6imkuV6-vm6JcAOiAgorrcphQkHEjU3Ar2NJ6gXfdGBooi7j4aGbsf7ckLf5-FkW-zzdlEFCnbAPcLh3Ps3apP6RaZnfenc6dc0GI8sBjQx_HNTxQzmS8nBZHrbIHDxJpErsV5AWQ",
    gallery: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDciPmSbjjVnibqOhhMOu9FjMH19INtI0AKXD7iBpn7vxvHBMNKsAn_Oa3QMB2OdDrWmE-okmB2GWiZ3maym0w_cxqH_1-K_j6imkuV6-vm6JcAOiAgorrcphQkHEjU3Ar2NJ6gXfdGBooi7j4aGbsf7ckLf5-FkW-zzdlEFCnbAPcLh3Ps3apP6RaZnfenc6dc0GI8sBjQx_HNTxQzmS8nBZHrbIHDxJpErsV5AWQ",
        label: "الأمامي",
        alt: "حقيبة كلاتش ميتاليك ذهبية"
      }
    ],
    description: "حقيبة سهرة مصقولة بملمس ساتاني ميتاليك ناعم، مزودة بسلسلة كتف ذهبية رقيقة قابلة للفك.",
    longDescription: "حجم مثالي يتسع لهاتفكِ الذكي وأدوات المكياج الأساسية مع قفل مغناطيسي محكم يحفظ مقتنياتكِ بأمان وأناقة تامة.",
    sizes: ["حجم موحد"],
    defaultSize: "حجم موحد",
    colors: [
      { name: "شامبين ميتاليك براق", hex: "#D4B877" }
    ],
    defaultColor: "شامبين ميتاليك براق",
    fabric: "ساتان حريري ميتاليك مدعم مع بطانة داخلية من الشامواه الناعم وقفل معدني ذهبي.",
    stylingTips: "احمليها باليد كحقيبة كلاتش راقية، أو علقيها على الكتف عبر السلسلة الذهبية المرفقة.",
    careInstructions: ["تُحفظ داخل كيس الحماية القماشي المرفق عند عدم الاستخدام."],
    featured: false,
    isNew: false
  }
];

// Helper functions for catalog queries
function getProductById(id) {
  return STORE_PRODUCTS.find(p => p.id === id) || STORE_PRODUCTS[0];
}

function getProductsByCategory(slug) {
  if (!slug || slug === "all") return STORE_PRODUCTS;
  if (slug === "new") return STORE_PRODUCTS.filter(p => p.isNew);
  return STORE_PRODUCTS.filter(p => p.categorySlug === slug);
}
