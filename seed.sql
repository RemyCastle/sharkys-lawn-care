INSERT OR IGNORE INTO site (
  id, hero_title, hero_lead, about, phone_display, email, towns,
  cta_primary, cta_secondary, quote_heading, quote_submit, quote_photos, quote_helper, updated_at
) VALUES (
  1,
  'All jobs, big or small, shoot us a message, we do them all.',
  'Mow, edge, trim, blow. Mulch, blackberries, thatch, cleanup, pressure wash. Eugene and Springfield area.',
  'Jonathan Lopez owns it. Insured and bonded. More than ten years on lawns. Estimates are free.',
  '(541) 579-0726',
  'sharkyslawncare.541@gmail.com',
  'Eugene and Springfield area',
  'Call (541) 579-0726',
  'Email us',
  'Email the job',
  'Send',
  'Photos of the yard, optional',
  'Or call (541) 579-0726.',
  datetime('now')
);

INSERT INTO services (slug, name, sort_order) SELECT * FROM (SELECT
  'general-maintenance' AS slug,
  'General Maintenance (Edging, Blowing, Trimming, Mowing)' AS name,
  0 AS sort_order
) WHERE NOT EXISTS (SELECT 1 FROM services);

INSERT INTO services (slug, name, sort_order) SELECT 'mulch-installation', 'Mulch Installation', 1 WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'mulch-installation');
INSERT INTO services (slug, name, sort_order) SELECT 'blackberry-removal', 'Blackberry Removal', 2 WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'blackberry-removal');
INSERT INTO services (slug, name, sort_order) SELECT 'thatch-aerate', 'Thatch and Aerate', 3 WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'thatch-aerate');
INSERT INTO services (slug, name, sort_order) SELECT 'seasonal-cleanups', 'Seasonal Clean-Ups and Debris Removal', 4 WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'seasonal-cleanups');
INSERT INTO services (slug, name, sort_order) SELECT 'pressure-washing', 'Pressure Washing', 5 WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'pressure-washing');

INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/photo1-pressure-wash-house.jpg', 'House siding mid pressure washing: left still oxidized, right cleaned, mulch bed in front', 'Pressure Washing', 720, 540, 0 WHERE NOT EXISTS (SELECT 1 FROM photos);
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-09.jpg', 'Backyard job with a curved stone wall, a leaning tree, and overgrown beds', 'Seasonal Clean-Ups and Debris Removal', 1080, 1080, 1 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-09.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-10-hires.jpg', 'Overgrown side yard between a house and a wood fence, with an HVAC unit', 'Seasonal Clean-Ups and Debris Removal', 1080, 1080, 2 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-10-hires.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-11-hires.jpg', 'Small backyard with a young tree, clover, and a stone wall', 'General Maintenance', 1080, 1080, 3 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-11-hires.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-12-hires.jpg', 'Side yard after clearing, bare earth along the fence and house', 'Seasonal Clean-Ups and Debris Removal', 1080, 1080, 4 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-12-hires.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-13-hires.jpg', 'Front yard cleared to dirt and straw beside a tan house', 'Seasonal Clean-Ups and Debris Removal', 1080, 1080, 5 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-13-hires.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-14-hires.jpg', 'Backyard job with a chainsaw, gas can, and tools on a stone wall', 'General Maintenance', 1080, 1080, 6 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-14-hires.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-15-hires.jpg', 'Cleared dirt along a house wall, fence, and metal gate', 'Seasonal Clean-Ups and Debris Removal', 1080, 1080, 7 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-15-hires.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/fb-16-hires.jpg', 'Sunken backyard after a cut, stone wall and wood fence behind it', 'General Maintenance', 1080, 1080, 8 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/fb-16-hires.jpg');
INSERT INTO photos (src, alt, caption, width, height, sort_order) SELECT '/work/ig-03.jpg', 'Overgrown lawn with tall weeds against a grey fence and a sleeper wall', 'General Maintenance', 640, 640, 9 WHERE NOT EXISTS (SELECT 1 FROM photos WHERE src = '/work/ig-03.jpg');

-- Do not insert pairs. Zero is the default. Never invent a before/after.
-- Do not insert reviews. Zero featured is the default. Never invent a quote.
