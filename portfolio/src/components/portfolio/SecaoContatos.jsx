import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function SecaoContato() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contato" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400/60 text-sm font-mono tracking-widest uppercase">Contato</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Vamos trabalhar<br />
            <span className="text-gray-500">juntos?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-gray-400 leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
              Se você tem uma ideia ou precisa de ajuda com desenvolvimento, entre em contato.
            </p>

            <div className="space-y-5">
              <a href="mailto:seu@email.com" className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-cyan-500/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-cyan-300 transition-colors duration-300">
                  seu@email.com
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-gray-300 text-sm">São Paulo, Brasil</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2 tracking-wide uppercase">Nome</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Seu nome"
                    className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-cyan-500/40 focus:ring-cyan-500/10 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2 tracking-wide uppercase">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="seu@email.com"
                    className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-cyan-500/40 focus:ring-cyan-500/10 h-12 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-medium mb-2 tracking-wide uppercase">Mensagem</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="Conte sobre seu projeto..."
                  rows={5}
                  className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-cyan-500/40 focus:ring-cyan-500/10 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full h-12 bg-white text-black font-semibold rounded-xl hover:bg-cyan-300 transition-colors duration-300 text-sm tracking-wide"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}