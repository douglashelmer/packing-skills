-- Executar no banco "automator" (mesmo do nexIA)
-- Tabela para registrar compradores do IAPRO.BLEND

CREATE TABLE IF NOT EXISTS iapro_buyers (
  id          SERIAL PRIMARY KEY,
  email       TEXT NOT NULL UNIQUE,
  name        TEXT,
  transaction TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_iapro_buyers_email ON iapro_buyers (email);
