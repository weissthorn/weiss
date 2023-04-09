const dict = [
  {
    en: 'Light',
    es: 'Ligera',
    fr: 'Lumière'
  },
  {
    en: 'Dark',
    es: 'Oscuro',
    fr: 'Sombre'
  },
  {
    en: 'Search....',
    es: 'Buscar....',
    fr: 'Chercher....'
  },
  {
    en: 'Search discussion, user, email.....',
    es: 'Búsqueda discusión, correo electrónico del usuario .....',
    fr: 'Rechercher la discussion par e-mail utilisateur ..... '
  },
  {
    en: 'Profile updated successfully',
    es: 'Perfil actualizado con éxito',
    fr: 'Mise à jour du profil réussie'
  },
  {
    en: 'Unable to update profile. Please try again.',
    es: 'No se puede actualizar el perfil. Inténtalo de nuevo.',
    fr: 'Impossible de mettre à jour le profil. Veuillez réessayer.'
  },
  {
    en: 'Profile',
    es: 'Perfil',
    fr: 'Profil '
  },
  {
    en: 'Date joined',
    es: 'Fecha de Registro',
    fr: "Date d'adhésion"
  },
  {
    en: 'Admin',
    es: 'Administración',
    fr: 'Administrateur'
  },
  {
    en: 'Log out',
    es: 'Cerrar sesión',
    fr: 'Se déconnecter'
  },
  {
    en: 'Start a discussion',
    es: 'Iniciar una discusión',
    fr: 'Ouvrir une discussion'
  },
  {
    en: 'Discussion',
    es: 'Discusión',
    fr: 'Discussion'
  },
  {
    en: 'Discussions',
    es: 'Asunto',
    fr: 'Discussions'
  },
  {
    en: 'Members',
    es: 'Miembros',
    fr: 'Membres'
  },
  {
    en: 'Member',
    es: 'Miembro',
    fr: 'Membre'
  },
  {
    en: 'member',
    es: 'Miembro',
    fr: 'Membre'
  },
  {
    en: 'comment',
    es: 'comentario',
    fr: 'commentaire'
  },
  {
    en: 'comments',
    es: 'comentarios',
    fr: 'les commentaires'
  },
  {
    en: 'Comment',
    es: 'Comentario',
    fr: 'Commentaire'
  },
  {
    en: 'Comments',
    es: 'Comentarios',
    fr: 'Les commentaires'
  },
  {
    en: 'reply',
    es: 'respuesta',
    fr: 'réponse'
  },
  {
    en: 'replies',
    es: 'respuestas',
    fr: 'Réponses'
  },
  {
    en: 'Reply',
    es: 'Respuesta',
    fr: 'Réponse'
  },
  {
    en: 'Replies',
    es: 'Respuestas',
    fr: 'Réponses'
  },
  {
    en: 'like',
    es: 'gustar',
    fr: 'comme'
  },
  {
    en: 'liked',
    es: 'gustó',
    fr: 'aimé'
  },
  {
    en: 'moderator',
    es: 'moderador',
    fr: 'modérateur'
  },
  {
    en: 'moderators',
    es: 'moderadores',
    fr: 'modérateurs'
  },
  {
    en: 'Moderator',
    es: 'Moderador',
    fr: 'Modérateur'
  },
  {
    en: 'Moderators',
    es: 'Moderadores',
    fr: 'Modérateurs'
  },
  {
    en: 'Loading',
    es: 'Cargando',
    fr: 'Chargement'
  },
  {
    en: 'Settings',
    es: 'Ajustes',
    fr: 'Réglages'
  },
  {
    en: 'Top Contributors',
    es: 'Principales contribuyentes',
    fr: 'Meilleurs contributeurs'
  },
  {
    en: 'Recommend Discussions',
    es: 'Recomendar discusiones',
    fr: 'Recommander des discussions '
  },
  {
    en: 'Share',
    es: 'Compartir',
    fr: 'Partager'
  },
  {
    en: 'Email',
    es: 'Correo electrónico',
    fr: 'E-mail '
  },
  {
    en: 'Report',
    es: 'Reporte',
    fr: 'Signaler'
  },
  {
    en: 'Reports',
    es: 'Informes',
    fr: 'Rapports'
  },
  {
    en: 'Edit discussion',
    es: 'Editar discusión',
    fr: 'Modifier la discussion'
  },
  {
    en: 'Category',
    es: 'Categoría',
    fr: 'Catégorie'
  },
  {
    en: 'Categories',
    es: 'Categorías',
    fr: 'Catégories'
  },
  {
    en: 'Reply',
    es: 'Respuesta',
    fr: 'Réponse'
  },
  {
    en: 'Replies',
    es: 'respuestas',
    fr: 'réponses'
  },
  {
    en: 'Click on the number count to who see liked.',
    es: 'Haga clic en el recuento de números a los que les gustó.',
    fr: 'Cliquez sur le nombre de compter à qui voir aimé.'
  },
  {
    en: 'Inappropiate content',
    es: 'Contenido inapropiado',
    fr: 'Contenu inapproprié '
  },
  {
    en: 'Fraud or Spam',
    es: 'Fraude o Spam',
    fr: 'Fraude ou spam'
  },
  {
    en: 'False information',
    es: 'Información falsa',
    fr: 'Fausse information'
  },
  {
    en: 'Nudity',
    es: 'Desnudez',
    fr: 'Nudité'
  },
  {
    en: 'Hate speech',
    es: 'El discurso del odio',
    fr: 'Discours de haine '
  },
  {
    en: 'Violence',
    es: 'Violencia',
    fr: 'La violence'
  },
  {
    en: 'Harassment',
    es: 'Acoso',
    fr: 'Harcèlement'
  },
  {
    en: 'Terrorism',
    es: 'Terrorismo',
    fr: 'Terrorisme'
  },
  {
    en: 'Suicide or self injury',
    es: 'Suicidio o autolesión',
    fr: 'Suicide ou automutilation'
  },
  {
    en: 'Child abuse',
    es: 'Abuso infantil',
    fr: 'Abus sur mineur'
  },
  {
    en: 'Coin',
    es: 'Moneda',
    fr: 'Pièce de monnaie'
  },
  {
    en: 'Coins',
    es: 'Monedas',
    fr: 'Pièces de monnaie'
  },
  {
    en: 'Discussion Title',
    es: 'Título de la discusión',
    fr: 'Titre de discussion'
  },
  {
    en: 'Choose a Category',
    es: 'Elige una categoría',
    fr: 'Choisissez une catégorie'
  },
  {
    en: 'Type here...',
    es: 'Escriba aquí...',
    fr: 'Écrivez ici...'
  },
  {
    en: 'Type something memorable....',
    es: 'Escriba algo memorable....',
    fr: 'Tapez quelque chose de mémorable....'
  },
  {
    en: 'Publish',
    es: 'Publicar',
    fr: 'Publier'
  },
  {
    en: 'Sign in',
    es: 'Iniciar sesión',
    fr: "S'identifier"
  },
  {
    en: 'Mark all read',
    es: 'Marcar todo como leido',
    fr: 'Marquer tout comme lu'
  },
  {
    en: 'No notification',
    es: 'Sin notificación',
    fr: 'Aucune notification'
  },
  {
    en: 'Sign in to publish',
    es: 'Inicia sesión para publicar',
    fr: 'Connectez-vous pour publier'
  },
  {
    en: 'Type something memorable...',
    es: 'Escriba algo memorable...',
    fr: 'Tapez quelque chose de mémorable...'
  },
  {
    en: 'Please select a language',
    es: 'Por favor, seleccione un idioma',
    fr: 'Veuillez sélectionner une langue'
  },
  {
    en: 'Popular',
    es: 'Popular',
    fr: 'Populaire'
  },
  {
    en: 'Recent',
    es: 'Reciente',
    fr: 'Récent'
  },
  {
    en: 'Unanswered',
    es: 'Sin respuesta',
    fr: 'Sans réponse'
  },
  {
    en: 'Joined',
    es: 'Unido',
    fr: 'Rejoint'
  },
  {
    en: 'Go to Discussions',
    es: 'Ir a Discusiones',
    fr: 'Aller aux Discussions'
  },
  {
    en: 'Unable to update status! Please try again later.',
    es: '¡No se puede actualizar el estado! Por favor, inténtelo de nuevo más tarde.',
    fr: 'Impossible de mettre à jour le statut ! Veuillez réessayer plus tard.'
  },
  {
    en: 'Discussion status updated',
    es: 'Estado de discusión actualizado',
    fr: 'Statut de la discussion mis à jour'
  },
  {
    en: 'No Discussion',
    es: 'Sin discusión',
    fr: 'Pas de discussion'
  },
  {
    en: 'Notification',
    es: 'Notificación',
    fr: 'Notification'
  },
  {
    en: 'Notifications',
    es: 'Notificaciones',
    fr: 'Avis'
  },
  {
    en: 'Mark All Read',
    es: 'Marcar todo leer',
    fr: 'Marquer tous lire'
  },
  {
    en: 'Cancel',
    es: 'Cancelar',
    fr: 'Annuler'
  },
  {
    en: 'Yes, Delete',
    es: 'Sí, Eliminar',
    fr: 'Oui, supprimer'
  },
  {
    en: 'Delete discussion',
    es: 'Eliminar discusión',
    fr: 'Supprimer la discussion'
  },
  {
    en: 'Are you sure you want to delete?',
    es: '¿Estás seguro de que quieres eliminar?',
    fr: 'Etes-vous sûr que vous voulez supprimer?'
  },
  {
    en: 'Oops! Page not found or has been deleted.',
    es: '¡Ups! Página no encontrada o eliminada.',
    fr: 'Oh là là! Page introuvable ou supprimée.'
  },
  {
    en: 'Back to home',
    es: 'Vuelve a casa',
    fr: "Retour à l'accueil"
  },
  {
    en: 'Page not found',
    es: 'Página no encontrada',
    fr: 'Page non trouvée'
  },
  {
    en: 'Account verified successfully! Please sign in to continue.',
    es: '¡Cuenta verificada con éxito! Por favor inicie sesión para continuar.',
    fr: 'Compte vérifié avec succès ! Veuillez vous connecter pour continuer.'
  },
  {
    en: 'Account settings',
    es: 'Configuraciones de la cuenta',
    fr: 'Paramètres du compte'
  },
  {
    en: 'In reply to [] comment',
    es: 'En respuesta al comentario de []',
    fr: 'En réponse au commentaire []'
  },
  {
    en: 'Send reply',
    es: 'Enviar respuesta',
    fr: 'Envoyer une réponse'
  },
  {
    en: 'User',
    es: 'Usuario',
    fr: 'Utilisateur'
  },
  {
    en: 'Pageviews',
    es: 'Visitas a páginas',
    fr: 'Avis de page '
  },
  {
    en: 'Dashboard',
    es: 'Salpicadero',
    fr: 'Tableau de bord '
  },
  {
    en: 'Name',
    es: 'Nombre',
    fr: 'Nom'
  },
  {
    en: 'Date',
    es: 'Fecha',
    fr: 'Date'
  },
  {
    en: 'Role',
    es: 'Papel',
    fr: 'Rôle '
  },
  {
    en: 'Actions',
    es: 'Acción',
    fr: 'Action '
  },
  {
    en: 'Action',
    es: 'Comportamiento',
    fr: 'Actes'
  },
  {
    en: 'Edit',
    es: 'Editar',
    fr: 'Modifier '
  },
  {
    en: 'View',
    es: 'Ver',
    fr: 'Vue'
  },
  {
    en: 'Username',
    es: 'Nombre de usuario',
    fr: "Nom de l'utilisateur "
  },
  {
    en: 'Status',
    es: 'Estado',
    fr: 'Statut'
  },
  {
    en: 'Active',
    es: 'Activo',
    fr: 'Actif'
  },
  {
    en: 'Banned',
    es: 'Prohibido',
    fr: 'Banni'
  },
  {
    en: 'Users',
    es: 'Usuarios',
    fr: 'Désactivée '
  },
  {
    en: 'Disabled',
    es: 'Discapacitado',
    fr: 'Fermer'
  },
  {
    en: 'Close',
    es: 'Cambiar estado',
    fr: 'Utilisateurs'
  },
  {
    en: 'Member since',
    es: 'Miembro desde',
    fr: 'Membre depuis'
  },
  {
    en: 'Change details',
    es: 'Cambiar detalles',
    fr: 'Modifier les détails'
  },
  {
    en: 'Change password',
    es: 'Cambiar la contraseña',
    fr: 'Changer le mot de passe'
  },
  {
    en: 'Type current password to update changes',
    es: 'Escriba la contraseña actual para actualizar los cambios',
    fr: 'Tapez le mot de passe actuel pour mettre à jour les modifications'
  },
  {
    en: 'Type new password',
    es: 'Escribe una nueva contraseña',
    fr: 'Tapez le nouveau mot de passe'
  },
  {
    en: 'Upload photo',
    es: 'Subir foto',
    fr: 'Envoyer la photo'
  },
  {
    en: 'Change status',
    es: 'Cambiar estado',
    fr: 'Changer de statut'
  },
  {
    en: 'Change role',
    es: 'Cambiar el papel',
    fr: 'Changer de rôle'
  },
  {
    en: 'Title',
    es: 'Título',
    fr: 'Titre'
  },
  {
    en: 'Answered',
    es: 'Respondi',
    fr: 'Répondu'
  },
  {
    en: 'Administrator',
    es: 'Administrador',
    fr: 'Administrateur'
  },
  {
    en: 'admin',
    es: 'administrador',
    fr: 'administrateur'
  },
  {
    en: 'Type',
    es: 'Tipo',
    fr: 'Taper'
  },
  {
    en: 'Color',
    es: 'Color',
    fr: 'Couleur'
  },
  {
    en: 'Add',
    es: 'Añadir',
    fr: 'Ajouter'
  },
  {
    en: 'Title is too short.',
    es: 'El título es demasiado corto.',
    fr: 'Le titre est trop court.'
  },
  {
    en: 'Description is required',
    es: 'Se requiere descripción',
    fr: 'La description est obligatoire'
  },
  {
    en: 'Category created successfully!',
    es: '¡Categoría creada con éxito!',
    fr: 'Catégorie créée avec succès !'
  },
  {
    en: 'Unable to create category. Please try again!',
    es: 'No se puede crear la categoría. ¡Inténtalo de nuevo!',
    fr: 'Impossible de créer la catégorie. Veuillez réessayer!'
  },
  {
    en: 'Edit category',
    es: 'Editar categoria',
    fr: 'Modifier la catégorie'
  },
  {
    en: 'Category updated successfully',
    es: 'Categoría actualizada con éxito',
    fr: 'Catégorie mise à jour avec succès'
  },
  {
    en: 'Unable to update category. Please try again!',
    es: 'No se puede actualizar la categoría. ¡Inténtalo de nuevo!',
    fr: 'Impossible de mettre à jour la catégorie. Veuillez réessayer!'
  },
  {
    en: 'yes',
    es: 'sí',
    fr: 'oui'
  },
  {
    en: 'no',
    es: 'no',
    fr: 'non'
  },
  {
    en: 'Apply filter',
    es: 'Aplicar filtro',
    fr: 'Appliquer le filtre'
  },
  {
    en: 'Incorrect email/username or password!',
    es: '¡Correo electrónico/nombre de usuario o contraseña incorrectos!',
    fr: "E-mail/nom d'utilisateur ou mot de passe incorrect !"
  },
  {
    en: 'Account is banned. Please contact the community admin.',
    es: 'La cuenta está prohibida. Póngase en contacto con el administrador de la comunidad.',
    fr: "Le compte est banni. Veuillez contacter l'administrateur de la communauté."
  },
  {
    en: 'Account is inactive. Please verify account.',
    es: 'La cuenta está inactiva. Verifique la cuenta.',
    fr: 'Le compte est inactif. Veuillez vérifier le compte.'
  },
  {
    en: 'Account is inactive.',
    es: 'La cuenta está inactiva.',
    fr: 'Le compte est inactif.'
  },
  {
    en: 'Successfully signed in!',
    es: '¡Iniciado sesión correctamente!',
    fr: 'Connexion réussie !'
  },
  {
    en: 'Account is suspended. Please contact the community admin.',
    es: 'La cuenta está suspendida. Póngase en contacto con el administrador de la comunidad.',
    fr: "Le compte est suspendu. Veuillez contacter l'administrateur de la communauté."
  },
  {
    en: 'Click here to verify your account.',
    es: 'Haga clic aquí para verificar su cuenta',
    fr: 'Cliquez ici pour vérifier votre compte'
  },
  {
    en: 'Please verify account to continue.',
    es: 'Verifique la cuenta para continuar.',
    fr: 'Veuillez vérifier le compte pour continuer.'
  },
  {
    en: 'Unable to verify user. Please try again later.',
    es: 'No se puede verificar el usuario. Por favor, inténtelo de nuevo más tarde.',
    fr: "Impossible de vérifier l'utilisateur. Veuillez réessayer plus tard."
  },
  {
    en: 'Account verified successfully! Please sign in to continue.',
    es: '¡Cuenta verificada con éxito! Por favor inicie sesión para continuar.',
    fr: 'Compte vérifié avec succès ! Veuillez vous connecter pour continuer.'
  },
  {
    en: 'Email does not exist in our record.',
    es: 'El correo electrónico no existe en nuestro registro.',
    fr: "L'e-mail n'existe pas dans notre dossier"
  },
  {
    en: 'Account recovery',
    es: 'Recuperación de Cuenta',
    fr: 'Récupération du compte'
  },
  {
    en: 'Email already exist! Please try password reset or verify your account.',
    es: '¡Ya existe el correo electrónico! Intente restablecer la contraseña o verifique su cuenta.',
    fr: "L'e-mail existe déjà ! Veuillez essayer de réinitialiser le mot de passe ou vérifier votre compte."
  },
  {
    en: 'Failed. Please try again later.',
    es: 'Fallido. Por favor, inténtelo de nuevo más tarde.',
    fr: 'Échoué. Veuillez réessayer plus tard'
  },
  {
    en: 'Uploading image....',
    es: 'Subiendo imagen....',
    fr: "Téléchargement de l'image...."
  },
  {
    en: 'Image uploaded successfully!',
    es: '¡Imagen cargada con éxito!',
    fr: 'Image téléchargée avec succès !'
  },
  {
    en: 'Current password is required to make changes.',
    es: 'Se requiere contraseña actual para hacer cambios.',
    fr: 'Le mot de passe actuel est requis pour apporter des modifications.'
  },
  {
    en: 'Account updated successfully!',
    es: '¡Cuenta actualizada con éxito!',
    fr: 'Compte mis à jour avec succès !'
  },
  {
    en: 'Unable to make changes! Current password is incorrect.',
    es: '¡No se pueden hacer cambios! La contraseña actual es incorrecta.',
    fr: "Impossible d'apporter des modifications ! Ce mot de passe est incorrect."
  },
  {
    en: 'Password is too short! Minimum character is six.',
    es: '¡La contraseña es demasiado corta! El carácter mínimo es seis.',
    fr: 'Le mot de passe est trop court! Le caractère minimum est six.'
  },
  {
    en: 'Password updated successfully!',
    es: '¡Contraseña actualizada exitosamente!',
    fr: 'Mot de passe mis à jour avec succès!'
  },
  {
    en: 'Unable to change password. Please try again.',
    es: 'No se puede cambiar la contraseña. Inténtalo de nuevo.',
    fr: 'Impossible de changer le mot de passe. Veuillez réessayer.'
  },
  {
    en: '',
    es: '',
    fr: ''
  },
  {
    en: '',
    es: '',
    fr: ''
  },
  {
    en: 'Add category',
    es: 'Añadir categoría',
    fr: 'Ajouter une catégorie'
  },
  {
    en: 'Create a category',
    es: 'Crear una categoría',
    fr: 'Créer une catégorie'
  },
  {
    en: 'Authentication',
    es: 'Autenticación',
    fr: 'Authentification'
  },
  {
    en: 'No',
    es: 'No',
    fr: 'Aucun'
  },
  {
    en: 'Yes',
    es: 'Sí',
    fr: 'Oui'
  },
  {
    en: 'Create a Category',
    es: 'Crear una categoría',
    fr: 'Créer une catégorie'
  },
  {
    en: 'Authentication required',
    es: 'Se requiere autenticación',
    fr: 'Authentification requise'
  },
  {
    en: 'Save',
    es: 'Guardar',
    fr: 'Enregistrer'
  },
  {
    en: 'Choose one or more',
    es: 'Elija uno o más',
    fr: 'Choisissez un ou plusieurs '
  },
  {
    en: 'Description',
    es: 'Descripción',
    fr: 'La description'
  },
  {
    en: 'Edit category',
    es: 'Editar categoría',
    fr: 'Modifier la catégorie'
  },
  {
    en: 'Metadata',
    es: 'Metadata',
    fr: 'Métadonnées'
  },
  {
    en: 'Site favicon',
    es: 'Sitio Favicon',
    fr: 'Favicon du site'
  },
  {
    en: 'Site logo',
    es: 'Logotipo del sitio',
    fr: 'Logo du site '
  },
  {
    en: 'Site name',
    es: 'Nombre del sitio',
    fr: 'Nom du site '
  },
  {
    en: 'Site description',
    es: 'Descripción del sitio',
    fr: 'Description du site'
  },
  {
    en: 'Site metadata',
    es: 'Metadatos del sitio',
    fr: 'Métadonnées du site'
  },
  {
    en: 'Site language',
    es: 'Idioma del sitio',
    fr: 'Langue du site'
  },
  {
    en: 'Language',
    es: 'Idioma',
    fr: 'La langue'
  },
  {
    en: 'Back',
    es: 'Atrás',
    fr: 'Dos'
  },
  {
    en: 'Advert code',
    es: 'Código de anuncio',
    fr: "Code de l'annonce"
  },
  {
    en: 'Save & launch',
    es: 'Guardar y lanzar',
    fr: 'Enregistrer et lancer'
  },
  {
    en: 'English',
    es: 'Inglés',
    fr: 'Anglais'
  },
  {
    en: 'French',
    es: 'Francés',
    fr: 'Français'
  },
  {
    en: 'Spanish',
    es: 'Español',
    fr: 'Espagnol'
  },
  {
    en: 'en',
    es: 'Inglés',
    fr: 'Anglais'
  },
  {
    en: 'fr',
    es: 'Francés',
    fr: 'Français'
  },
  {
    en: 'es',
    es: 'Español',
    fr: 'Espagnol'
  },
  {
    en: 'coming soon',
    es: 'muy pronto',
    fr: 'à venir'
  },
  {
    en: 'Settings updated successfully',
    es: 'Configuración actualizada con éxito',
    fr: 'Paramètres mis à jour avec succès'
  },
  {
    en: 'Error updating settings! Please try again.',
    es: '¡Error al actualizar la configuración! Inténtalo de nuevo.',
    fr: 'Erreur lors de la mise à jour des paramètres ! Veuillez réessayer.'
  },
  {
    en: 'Social settings',
    es: 'Ajustes sociales',
    fr: 'Paramètres sociaux'
  },
  {
    en: 'Advert settings',
    es: 'Configuración de anuncio',
    fr: "Paramètres de l'annonce"
  },
  {
    en: "Note: Changing coin values will affect users' current value.",
    es: 'Nota: Cambiar los valores de las monedas afectará el valor actual de los usuarios.',
    fr: 'Remarque : La modification des valeurs des pièces affectera la valeur actuelle des utilisateurs.'
  },
  {
    en: 'Top',
    es: 'Parte superior',
    fr: 'Haut'
  },
  {
    en: 'Left side',
    es: 'Lado izquierdo',
    fr: 'Côté gauche'
  },
  {
    en: 'Right side',
    es: 'Derecha',
    fr: 'Côté droit'
  },
  {
    en: 'Inner',
    es: 'Interior',
    fr: 'Interne'
  },
  {
    en: 'Please provide SMTP host',
    es: 'Por favor proporcione el host SMTP',
    fr: "Veuillez indiquer l'hôte SMTP"
  },
  {
    en: 'Email settings',
    es: 'Ajustes del correo electrónico',
    fr: 'Paramètres de messagerie'
  },
  {
    en: 'Advert Code',
    es: 'Código de anuncio',
    fr: 'Code publicitaire'
  },
  {
    en: 'SMTP host',
    es: 'Servidor SMTP',
    fr: 'Hôte SMTP'
  },
  {
    en: 'SMTP user/email',
    es: 'Usuario / correo electrónico SMTP',
    fr: 'Utilisateur / email SMTP'
  },
  {
    en: 'SMTP password',
    es: 'Contraseña SMTP',
    fr: 'Mot de passe SMTP'
  },
  {
    en: 'Reward settings',
    es: 'Configuración de recompensas',
    fr: 'Paramètres de récompense'
  },
  {
    en: 'Note: Changing coin values will affect users current value',
    es: 'Nota: El cambio de los valores de las monedas afectará el valor actual de los usuarios',
    fr: 'Remarque: la modification des valeurs des pièces affectera la valeur actuelle des utilisateurs'
  },
  {
    en: 'Login reward',
    es: 'Recogida de sesión',
    fr: 'Récompense de connexion'
  },
  {
    en: 'Discussion reward',
    es: 'Discusión recompensa',
    fr: 'Récompense de discussion'
  },
  {
    en: 'Comment reward',
    es: 'Comentario Recompensa',
    fr: 'Commentaire récompense'
  },
  {
    en: 'Best answer reward',
    es: 'Recompensa de mejor respuesta',
    fr: 'Meilleure récompense de réponse '
  },
  {
    en: 'Banned words',
    es: 'Palabras prohibidas',
    fr: 'Mots interdits'
  },
  {
    en: 'Sign into your account',
    es: 'Inicie sesión en su cuenta',
    fr: 'Connectez-vous à votre compte'
  },
  {
    en: 'Email or username',
    es: 'Correo electrónico o nombre de usuario',
    fr: "Email ou nom d'utilisateur"
  },
  {
    en: 'Password',
    es: 'Contraseña',
    fr: 'Mot de passe'
  },
  {
    en: 'Log In',
    es: 'Iniciar',
    fr: 'Se connecter'
  },
  {
    en: 'Forgotten Password?',
    es: '¿Contraseña olvidada?',
    fr: 'Mot de passe oublié?'
  },
  {
    en: 'Reset here',
    es: 'Reiniciar aquí',
    fr: 'Réinitialiser ici'
  },
  {
    en: 'Not a member?',
    es: '¿No eres miembro?',
    fr: 'Pas un membre?'
  },
  {
    en: 'Signup',
    es: 'Inscribirse',
    fr: "S'inscrire"
  },
  {
    en: 'Signup here',
    es: 'Regístrese aquí',
    fr: 'Inscrivez-vous ici '
  },
  {
    en: 'Password retrieval',
    es: 'Recuperación de contraseñas',
    fr: 'Récupération du mot de passe'
  },
  {
    en: 'Email address',
    es: 'Dirección de correo electrónico',
    fr: 'Adresse e-mail'
  },
  {
    en: 'Reset password',
    es: 'Restablecer contraseña',
    fr: 'Réinitialiser le mot de passe'
  },
  {
    en: 'Back to login',
    es: 'Volver a Iniciar sesión',
    fr: 'Retour à la connexion'
  },
  {
    en: 'Reset your password',
    es: 'Restablezca su contraseña',
    fr: 'réinitialisez votre mot de passe'
  },
  {
    en: 'Select language',
    es: 'Seleccione el idioma',
    fr: 'Choisir la langue'
  },
  {
    en: 'Continue',
    es: 'Continuar',
    fr: 'Continuer'
  },
  {
    en: 'Welcome',
    es: 'Bienvenue',
    fr: 'Bienvenue'
  },
  {
    en: "Welcome, Let's setup blazingly!",
    es: '¡Bienvenido, vamos a configurar deslumbrantemente!',
    fr: 'Bienvenue, installons-nous de manière flamboyante !'
  },
  {
    en: 'Enter code sent to your email',
    es: 'Ingrese el código enviado a su correo electrónico',
    fr: 'Entrez le code envoyé à votre e-mail'
  },
  {
    en: 'New Password',
    es: 'Nueva contraseña',
    fr: 'Nouveau mot de passe'
  },
  {
    en: 'Retype Password',
    es: 'Vuelva a escribir la contraseña',
    fr: 'Retaper le mot de passe'
  },
  {
    en: 'Code is incorrect or expired.',
    es: 'El código es incorrecto o venció.',
    fr: 'Le code est incorrect ou expiré.'
  },
  {
    en: 'Passwords does not matched!',
    es: '¡Las contraseñas no coinciden!',
    fr: 'Les mots de passe ne correspondent pas!'
  },
  {
    en: 'Password reset successfully!',
    es: 'Restablecimiento de contraseña correctamente!',
    fr: 'Réinitialisation du mot de passe avec succès!'
  },
  {
    en: 'Unable to update user. Please try again later.',
    es: 'No se puede actualizar el usuario.  Vuelva a intentarlo más tarde.',
    fr: "Impossible de mettre à jour l'utilisateur. Veuillez réessayer plus tard."
  },
  {
    en: 'Account created successfully! Please verify account to continue.',
    es: '¡Cuenta creada correctamente! Verifique la cuenta para continuar.',
    fr: 'Compte créé avec succès! Veuillez vérifier le compte pour continuer.'
  },
  {
    en: 'Create your account',
    es: 'Crea tu cuenta',
    fr: 'Créez votre compte'
  },
  {
    en: 'Account verification',
    es: 'Verificación de la cuenta',
    fr: 'Vérification de compte'
  },
  {
    en: 'Fullname',
    es: 'Nombre completo',
    fr: 'Nom et prénom'
  },
  {
    en: 'Username is available.',
    es: 'El nombre de usuario está disponible.',
    fr: "Le nom d'utilisateur est disponible."
  },
  {
    en: 'Username is not available. Try another name.',
    es: 'El nombre de usuario no está disponible. Pruebe con otro nombre.',
    fr: "Le nom d'utilisateur n'est pas disponible. Essayez un autre nom."
  },
  {
    en: 'Have an account?',
    es: '¿Tener una cuenta?',
    fr: 'Avoir un compte?'
  },
  {
    en: 'Login here',
    es: 'Iniciar sesión aquí',
    fr: 'Connectez-vous ici'
  },
  {
    en: 'Fullname is too short.',
    es: 'FullName es demasiado corto.',
    fr: 'FullName est trop court.'
  },
  {
    en: 'Username is too short. Minimum character is three.',
    es: 'El nombre de usuario es demasiado corto. El carácter mínimo es tres.',
    fr: "Le nom d'utilisateur est trop court. Le caractère minimum est de trois."
  },
  {
    en: 'Invalid email address',
    es: 'Dirección de correo electrónico no válida',
    fr: 'Adresse e-mail non valide'
  },
  {
    en: 'Password is too short. Minimum character is six.',
    es: 'La contraseña es demasiado corta. El carácter mínimo es seis.',
    fr: 'Le mot de passe est trop court. Le caractère minimum est de six.'
  },
  {
    en: 'Verify your account',
    es: 'Verifique su cuenta',
    fr: 'Vérifiez votre compte'
  },
  {
    en: 'Unable to verify user. Please try again later',
    es: 'No se puede verificar el usuario. Vuelva a intentarlo más tarde',
    fr: "Impossible de vérifier l'utilisateur. Veuillez réessayer plus tard"
  },
  {
    en: 'Account verified successfully!',
    es: 'Cuenta verificada correctamente!',
    fr: 'Compte vérifié avec succès!'
  },
  {
    en: 'Type words separate with comma',
    es: 'Escriba palabras separadas con coma',
    fr: 'Tapez des mots séparés par une virgule'
  },
  {
    en: 'Upload favicon',
    es: 'Subir favicon',
    fr: 'Télécharger le favicon'
  },
  {
    en: 'Upload logo',
    es: 'Subir logotipo',
    fr: 'Télécharger le logo'
  },
  {
    en: 'Unable to save comment.',
    es: 'Incapaz de guardar el comentario.',
    fr: "Impossible d'enregistrer les commentaires."
  },
  {
    en: 'Error occured. Please try again!',
    es: 'Se produjo un error. ¡Vuelva a intentarlo!',
    fr: "Une erreur s'est produite. Veuillez réessayer!"
  },
  {
    en: 'Discussion reported!',
    es: 'Discusión reportada!',
    fr: 'Discussion rapportée !'
  },
  {
    en: 'Reporting....',
    es: 'Informes ....',
    fr: 'Reportage ....'
  },
  {
    en: 'Error creating post! Please try again.',
    es: '¡Error al crear la publicación! Vuelva a intentarlo.',
    fr: 'Erreur de création de publication! Veuillez réessayer.'
  },
  {
    en: 'Title is too short!',
    es: '¡El título es demasiado corto!',
    fr: 'Le titre est trop court!'
  },
  {
    en: 'Please choose a category!',
    es: '¡Elija una categoría!',
    fr: 'Veuillez choisir une catégorie!'
  },
  {
    en: 'Content is blank.',
    es: 'El contenido está en blanco.',
    fr: 'Le contenu est vide.'
  },
  {
    en: 'You are required to login to access this page',
    es: 'Debe iniciar sesión para accede a esta página',
    fr: 'Vous devez vous connecter pour accéder à cette page'
  },
  {
    en: 'Sign in',
    es: 'Registrarse',
    fr: 'Signer un signe '
  }
];

export default dict;
