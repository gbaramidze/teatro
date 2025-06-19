import crypto from 'crypto';

class Signature {
  static password = '';
  static merchant = '';

  /**
   * Установить пароль (secret key)
   */
  static setPassword(password) {
    this.password = password;
  }

  /**
   * Установить ID мерчанта
   */
  static setMerchant(merchant) {
    this.merchant = merchant;
  }

  /**
   * Сгенерировать подпись
   */
  static generate(params = {}) {
    const data = { ...params, merchant_id: this.merchant };

    // Удаляем пустые строки и null/undefined
    const filtered = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== '' && v != null)
    );

    const sorted = Object.entries(filtered).sort(([a], [b]) => a.localeCompare(b));
    const values = sorted.map(([, v]) => v);
    values.unshift(this.password); // prepend password

    const baseString = values.join('|');
    return crypto.createHash('sha1').update(baseString).digest('hex');
  }

  /**
   * Добавить поле `signature` в объект параметров
   */
  static sign(params = {}) {
    if ('signature' in params) return params;
    return {
      ...params,
      signature: this.generate(params),
    };
  }

  /**
   * Удалить `signature` и `response_signature_string`
   */
  static clean(data = {}) {
    const cleaned = { ...data };
    delete cleaned.signature;
    delete cleaned.response_signature_string;
    return cleaned;
  }

  /**
   * Проверить правильность подписи ответа
   */
  static check(response = {}) {
    if (!('signature' in response)) return false;

    const signature = response.signature;
    const cleaned = this.clean(response);
    const generated = this.generate(cleaned);

    return signature === generated;
  }
}

export default Signature;
