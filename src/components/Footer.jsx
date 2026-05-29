import Image from 'next/image';

// TODO: Replace Figma asset URLs with permanent hosted images before deploying
export default function Footer() {
  return (
    <footer id="footer" className="bg-[#e2e1ef] py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left — Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo-blue.png"
            alt="The Light Years CDC"
            width={465}
            height={120}
            className="w-full max-w-[300px] h-auto object-contain"
          />
        </div>

        {/* Center — Location */}
        <div>
          <h3
            className="font-[family-name:var(--font-montserrat)] font-extrabold text-[#604f94] mb-4"
            style={{ fontSize: '28px' }}
          >
            Location:
          </h3>
          <div className="mb-4">
            <p className="font-[family-name:var(--font-montserrat)] font-bold text-[#3a2e69] text-sm mb-1">
              Tebet
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-[#3a2e69] text-sm">
              Jl. Prof. DR. Soepomo No.11A, RT.12/RW.3, Tebet Barat, Jakarta Selatan
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-montserrat)] font-bold text-[#3a2e69] text-sm mb-1">
              Pagedangan
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-[#3a2e69] text-sm">
              Jl. Kp. Cicayur I, RT.001/RW.002, Kec. Pagedangan, Kabupaten Tangerang, Banten
            </p>
          </div>
        </div>

        {/* Right — Contact */}
        <div>
          <h3
            className="font-[family-name:var(--font-montserrat)] font-extrabold text-[#604f94] mb-4"
            style={{ fontSize: '28px' }}
          >
            Contact Us:
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="https://instagram.com/thelightyears.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-75 transition-opacity"
            >
              <Image
                src="https://www.figma.com/api/mcp/asset/cb176437-ed00-4a58-8eb2-ddee5e20102e"
                alt="Instagram"
                width={24}
                height={24}
                unoptimized
              />
              <span className="font-[family-name:var(--font-montserrat)] text-[#3a2e69] text-sm">
                @thelightyears.id
              </span>
            </a>
            <a
              href="https://wa.me/6285186055162"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-75 transition-opacity"
            >
              <Image
                src="https://www.figma.com/api/mcp/asset/7694ce63-9aa5-4a79-8e1f-6c7feddf19c5"
                alt="WhatsApp"
                width={24}
                height={24}
                unoptimized
              />
              <span className="font-[family-name:var(--font-montserrat)] text-[#3a2e69] text-sm">
                +62 851 8605 5162
              </span>
            </a>
            <a
              href="mailto:admin@thelightyearscdc.com"
              className="flex items-center gap-3 hover:opacity-75 transition-opacity"
            >
              <Image
                src="https://www.figma.com/api/mcp/asset/6b285159-6231-4ff6-99d7-8a7a7a1dbcaf"
                alt="Email"
                width={24}
                height={24}
                unoptimized
              />
              <span className="font-[family-name:var(--font-montserrat)] text-[#3a2e69] text-sm">
                admin@thelightyearscdc.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
