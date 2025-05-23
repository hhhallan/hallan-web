import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD n\'est pas défini dans les variables d\'environnement');
      return NextResponse.json(
        { error: 'Configuration du serveur incorrecte' }, 
        { status: 500 }
      );
    }
    
    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Mot de passe incorrect' }, 
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Erreur lors de la connexion admin:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la connexion' }, 
      { status: 500 }
    );
  }
}