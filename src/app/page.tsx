import Link from 'next/link';
import { Terminal, Code2, Play, Rocket, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              KAISOUL <span className="text-cyan-400">DEV</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2"
            >
              Đăng nhập
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
            >
              Bắt đầu <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
            <Cpu className="w-3.5 h-3.5" /> Nền tảng Cloud IDE & Deployment
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            Xây dựng và Triển khai Website <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-500 bg-clip-text text-transparent">
              Nhanh chóng & Đơn giản
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Môi trường lập trình trực tiếp trên trình duyệt. Tạo, chỉnh sửa code và xuất bản sản phẩm chỉ trong vài phút.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/login"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-colors shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              Trải nghiệm ngay <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-base transition-colors"
            >
              Đăng nhập tài khoản
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Tính năng cốt lõi cho Developer
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Mọi công cụ bạn cần để đi từ ý tưởng sơ khai đến một sản phẩm hoàn chỉnh trên môi trường thực tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Tạo project</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Khởi tạo dự án mới tức thì với cấu trúc chuẩn hóa, hỗ trợ quản lý file linh hoạt.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Viết code trực tiếp</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Trình soạn thảo Monaco Editor mạnh mẽ tích hợp ngay trên trình duyệt web.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Preview website</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Xem trước giao diện và kiểm thử ứng dụng theo thời gian thực ngay khi gõ code.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">4. Publish project</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Triển khai ứng dụng lên hạ tầng Cloud chỉ bằng một thao tác click duy nhất.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>&copy; {new Date().getFullYear()} KAISOUL DEV. All rights reserved.</span>
          </div>
          <p className="text-slate-600">Nền tảng phát triển và triển khai website đơn giản.</p>
        </div>
      </footer>
    </div>
  );
}
