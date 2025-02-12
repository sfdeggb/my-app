'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Home, FolderKanban, User, Phone, BookOpen, MapPin, Calendar, ExternalLink, Code, GitBranch, Terminal, FileCode, ArrowRight, Mail, Building, Cpu, Database, Brain, Eye, Server, PenTool } from 'lucide-react'

export function Portfolio() {
  const [showContact, setShowContact] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  const homeRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false })
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
    return date.toLocaleDateString('zh-CN', options)
  }

  const projects = [
    { name: "RL_Like_o1", description: "强化学习算法实现", link: "https://github.com/sfdeggb/RL_Like_o1", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-CAow1FKHyNjsiov3vQf3SuwixNveY1.jpg" },
    { name: "AI_Renamer_Enginner", description: "AI重命名工具", link: "https://github.com/sfdeggb/AI_Renamer_Enginner", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-P7v8n3ezCAPDRO7UDg3lHwRU0vWe1p.jpg" },
    { name: "Emind", description: "思维导图生成工具", link: "https://github.com/sfdeggb/Emind", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Tu5fPxBGgUqAHnBZzRoVS9N6UQaz17.jpg" },
    { name: "JIAN-Copilot", description: "AI编程助手", link: "https://github.com/sfdeggb/JIAN-Copilot", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-6qK9yaJT4WhmfvRERHa2USGGo6JJbf.jpg" },
    { name: "LLM-Roadmap", description: "大语言模型学习路线图", link: "https://github.com/sfdeggb/LLM-Roadmap", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mtbyEOWSzxQHALYIdTJuPupit8kpnr.jpg" },
    { name: "Face-Version", description: "人脸识别系统", link: "https://github.com/sfdeggb/Face-Version", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-sLr3FGnrS41wuGSl84tIHVVMiFJX9r.jpg" }
  ]

  const skills = [
    { name: "机器学习", icon: Brain, color: "text-green-400" },
    { name: "深度学习", icon: Cpu, color: "text-blue-400" },
    { name: "自然语言处理", icon: PenTool, color: "text-yellow-400" },
    { name: "计算机视觉", icon: Eye, color: "text-purple-400" },
    { name: "强化学习", icon: Cpu, color: "text-red-400" },
    { name: "大规模AI系统", icon: Server, color: "text-indigo-400" },
    { name: "python后端", icon: Database, color: "text-pink-400" }
  ]

  const tools = [
    { name: "VSCode", icon: Code },
    { name: "Git", icon: GitBranch },
    { name: "Cursor", icon: Terminal },
    { name: "Postman", icon: FileCode },
    { name: "Typora", icon: FileCode }
  ]

  const partners = [
    { name: "成都文武信息技术有限责任公司", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%87%E6%AD%A6%E4%BF%A1%E6%81%AF-bqsFtw8P6N2sfgYycHC5VXp6OWQzra.png", aspectRatio: "4/1" },
    { name: "成都移动互联网协会", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%92%E8%81%94%E7%BD%91%E5%8D%8F%E4%BC%9A-Ej6LdzNgzkf5gmmJEeCFq6LFtwbRGF.png", aspectRatio: "1/1" },
    { name: "智伯乐（成都）科技有限责任公司", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%BA%E4%BC%AF%E4%B9%90-gHWCBnEg1nEj6dH35OLSdCD90discx.png", aspectRatio: "5/1" },
  ]

  const blogPosts = [
    { title: "AI革命：深度学习的未来", category: "人工智能", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog1-swgju8go5oYHgSg1Ykink71rZzT37Z.jpg" },
    { title: "从零开始：构建你的第一个神经网络", category: "机器学习", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog2-xfVqrlFjswtg6Q8cQjdu5Sm5vnorT8.jpg" },
    { title: "数据科学家的日常：挑战与机遇", category: "数据科学", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog3-V95guEg8ODAvIoduXNPOGWrbV7fyFb.jpg" },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* 侧边栏 */}
      <nav className="w-64 bg-gray-800 flex flex-col">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rxNYZVAn4bv1rOFceCtceDQAMsRjUu.png"
              alt="Logo"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-bold">STAG</span>
          </div>
          <span className="text-gray-400">{formatTime(currentTime)}</span>
        </div>
        <div className="p-4 bg-gray-700">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A4%B4%E5%83%8F-fhyHqyCLslcWja6s4Ny4bMdOYNV9rs.jpg"
              alt="朱建豪的头像"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-bold">朱建豪</h2>
              <p className="text-sm text-gray-400">算法工程师</p>
            </div>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            <span>成都</span>
          </div>
        </div>
        <ul className="flex-1 p-4 space-y-2">
          <li className="flex items-center space-x-3 text-blue-400 cursor-pointer" onClick={() => scrollToSection(homeRef)}>
            <Home className="w-5 h-5" />
            <span>首页</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(projectsRef)}>
            <FolderKanban className="w-5 h-5" />
            <span>项目</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>
            <User className="w-5 h-5" />
            <span>关于</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(skillsRef)}>
            <BookOpen className="w-5 h-5" />
            <span>技能</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(blogRef)}>
            <BookOpen className="w-5 h-5" />
            <span>博客</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(contactRef)}>
            <Phone className="w-5 h-5" />
            <span>联系</span>
          </li>
        </ul>
      </nav>

      {/* 主要内容 */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* 个人资料部分 */}
        <section ref={homeRef} className="mb-12 bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-green-400">可接受自由职业工作</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{formatDate(currentTime)}</span>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center">
                联系我 <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-400 text-sm mb-1">算法工程师</h2>
            <h1 className="text-3xl font-bold flex items-center">
              朱建豪 <span className="ml-2">👋</span>
            </h1>
          </div>
          <p className="text-gray-400 mb-4">
            我是一名专注于机器学习和人工智能的算法工程师，擅长解决复杂问题并开发创新解决方案。我热衷于探索AI的前沿领域，并将其应用于实际项目中。
          </p>
          <div className="flex justify-between items-end">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%AD%BE%E5%90%8D-KTZlP9gYNIBDg0qdVw60v3HIbQacO2.png"
              alt="个人签名"
              width={100}
              height={50}
              className="opacity-80"
            />
            <div className="text-right">
              <p className="text-sm text-gray-400">成都市高新区天府大道</p>
              <p className="text-sm text-blue-400">中国</p>
            </div>
          </div>
        </section>

        {/* 项目展示 */}
        <section ref={projectsRef} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">项目</h2>
            <a href="https://github.com/sfdeggb" className="text-blue-400 flex items-center" target="_blank" rel="noopener noreferrer">
              查看全部 <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <a href={project.link} key={index} className="bg-gray-800 rounded-lg overflow-hidden" target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-sm  text-gray-400">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 关于（工作经历、教育背景、认证） */}
        <section ref={aboutRef} className="mb-12">
          <h2 className="text-xl font-bold mb-4">关于我</h2>

          {/* 合作伙伴 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">合作伙伴</h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold">合作伙伴</h4>
                <p className="text-gray-400">长期合作伙伴将获得优先支持</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="w-full h-24 mb-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-full relative" style={{ aspectRatio: partner.aspectRatio }}>
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            layout="fill"
                            objectFit="contain"
                            className="p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-sm font-medium text-gray-300">{partner.name}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mt-8">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-blue-400">3+</p>
                  <p className="text-gray-400">年工作经验</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-green-400">20+</p>
                  <p className="text-gray-400">完成项目</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-yellow-400">100%</p>
                  <p className="text-gray-400">客户满意度</p>
                </div>
              </div>
            </div>
          </div>

          {/* 教育背景 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">教育背景</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold">成都信息工程大学</h4>
              <p>数据科学与大数据技术工学学士</p>
            </div>
          </div>

          {/* 认证 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">认证</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold">高级系统分析师</h4>
              <p>中国工业与信息化部（MIIT）</p>
            </div>
          </div>
        </section>

        {/* 技能和工具 */}
        <section ref={skillsRef} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">技能与工具</h2>

          {/* 技能 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">技能</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 工具 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">工具</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <tool.icon className="w-10 h-10 text-blue-400" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 博客 */}
        <section ref={blogRef} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">博客</h2>
            <a href="#" className="text-blue-400 flex items-center">
              查看全部 <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-400">{post.category}</p>
                  <a href="#" className="text-blue-400 flex items-center mt-2">
                    阅读更多 <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 评价 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">评价</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="italic">"可靠、值得信任、工作中合作愉快。"</p>
              <p className="text-right">— 张定誉，成都移动互联网协会</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="italic">"愿意为自己的想法付出实践和努力。"</p>
              <p className="text-right">— 岳远航，智伯乐（成都）科技有限责任公司</p>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section ref={contactRef} className="mb-12">
          <h2 className="text-xl font-bold mb-4">联系我</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">姓名</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">邮箱</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">留言</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  提交
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">地址</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium">访问我</h4>
                    <p className="text-sm text-gray-400">成都市高新区天府大道</p>
                    <p className="text-sm text-gray-400">中国</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium">联系方式</h4>
                    <p className="text-sm text-gray-400">+86 191-8098-8426</p>
                    <p className="text-sm text-gray-400">Z19180988426（微信）</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium">邮箱</h4>
                    <p className="text-sm text-gray-400">2128449235@qq.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}