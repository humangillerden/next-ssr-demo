import { news, products } from './db.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    
    if(req.query.category){
      const filtered = news.filter((n) => n.category === req.query.category)

      return filtered.length > 0
        ? res.status(200).json(filtered) //filtered[0] ilk bulunan kaydı getirir
        : res.status(404).json({ message: `category: ${req.query.category} not found.` })
    }

    res.status(200).json(news);
  }
}
