import { getContentMap } from '@/lib/notion/content';
import { getProjects } from '@/lib/notion/projects';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Récupérer les données les plus récentes
    await Promise.all([
      getProjects(),
      getContentMap()
    ]);
    
    // Réinitialiser le cache pour les chemins concernés
    revalidatePath('/');
    revalidatePath('/api/projects');
    revalidatePath('/api/content');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Données mises à jour avec succès' 
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour des données:', error);
    return NextResponse.json(
      { success: false, error: 'Échec de la mise à jour des données' }, 
      { status: 500 }
    );
  }
}