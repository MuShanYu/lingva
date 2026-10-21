import { useLocale } from '@/i18n/context'
import PrivacyZh from './PrivacyZh'
import PrivacyEn from './PrivacyEn'

/**
 * 隐私政策是法律文本，按语言各写一份完整正文，而不是逐句抽文案键。
 * 两份内容必须保持一致：改其中一份时另一份同步改。
 */
export default function Privacy() {
  const { locale } = useLocale()
  return locale === 'en' ? <PrivacyEn /> : <PrivacyZh />
}
