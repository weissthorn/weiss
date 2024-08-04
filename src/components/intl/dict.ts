const dict = [
  {
    en: 'Light',
    es: 'Ligera',
    fr: 'Lumière',
    de: 'Licht',
    cn: '亮',
    ja: 'ライト',
    ru: 'Светлая',
    ko: '빛'
  },
  {
    en: 'Dark',
    es: 'Oscuro',
    fr: 'Sombre',
    de: 'Dunkel',
    cn: '暗',
    ja: 'ダーク',
    ru: 'Темная',
    ko: '어둠'
  },
  {
    en: 'Search....',
    es: 'Buscar....',
    fr: 'Chercher....',
    de: 'Suchen....',
    cn: '搜索...',
    ja: '検索....',
    ru: 'Поиск....',
    ko: '검색....'
  },
  {
    en: 'Search discussion, user, email.....',
    es: 'Búsqueda discusión, correo electrónico del usuario .....',
    fr: 'Rechercher la discussion par e-mail utilisateur ..... ',
    de: 'Suche nach Diskussionen, Benutzern, E-Mails.....',
    cn: '搜索讨论、用户、电子邮件...',
    ja: 'ディスカッション、ユーザー、メールで検索....',
    ru: 'Поиск дискуссии, пользователя, электронной почты.....',
    ko: '토론, 사용자, 이메일 검색.....'
  },
  {
    en: 'Profile updated successfully',
    es: 'Perfil actualizado con éxito',
    fr: 'Mise à jour du profil réussie',
    de: 'Profil erfolgreich aktualisiert',
    cn: '个人资料更新成功',
    ja: 'プロフィールが正常に更新されました',
    ru: 'Профиль успешно обновлен',
    ko: '프로필이 성공적으로 업데이트되었습니다.'
  },
  {
    en: 'Unable to update profile. Please try again.',
    es: 'No se puede actualizar el perfil. Inténtalo de nuevo.',
    fr: 'Impossible de mettre à jour le profil. Veuillez réessayer.',
    de: 'Profil kann nicht aktualisiert werden. Bitte versuchen Sie es erneut.',
    cn: '无法更新个人资料，请重试。',
    ja: 'プロフィールを更新できませんでした。もう一度お試しください。',
    ru: 'Не удалось обновить профиль. Пожалуйста, попробуйте еще раз.',
    ko: '프로필을 업데이트할 수 없습니다. 다시 시도해주세요.'
  },
  {
    en: 'Profile',
    es: 'Perfil',
    fr: 'Profil ',
    de: 'Profil',
    cn: '个人资料',
    ja: 'プロフィール',
    ru: 'Профиль',
    ko: '프로필'
  },
  {
    en: 'Date joined',
    es: 'Fecha de Registro',
    fr: "Date d'adhésion",
    de: 'Beitrittsdatum',
    cn: '加入日期',
    ja: '参加日',
    ru: 'Дата регистрации',
    ko: '가입 날짜'
  },
  {
    en: 'Admin',
    es: 'Administración',
    fr: 'Administrateur',
    de: 'Administrator',
    cn: '管理员',
    ja: '管理者',
    ru: 'Администратор',
    ko: '관리자'
  },
  {
    en: 'Log out',
    es: 'Cerrar sesión',
    fr: 'Se déconnecter',
    de: 'Abmelden',
    cn: '退出登录',
    ja: 'ログアウト',
    ru: 'Выйти',
    ko: '로그아웃'
  },
  {
    en: 'Start a discussion',
    es: 'Iniciar una discusión',
    fr: 'Ouvrir une discussion',
    de: 'Diskussion starten',
    cn: '开始讨论',
    ja: 'ディスカッションを始める',
    ru: 'Начать дискуссию',
    ko: '토론 시작하기'
  },
  {
    en: 'Discussion',
    es: 'Discusión',
    fr: 'Discussion',
    de: 'Diskussion',
    cn: '讨论',
    ja: 'ディスカッション',
    ru: 'Дискуссия',
    ko: '토론'
  },
  {
    en: 'Discussions',
    es: 'Asunto',
    fr: 'Discussions',
    de: 'Diskussionen',
    cn: '讨论',
    ja: 'ディスカッション',
    ru: 'Дискуссии',
    ko: '토론들'
  },
  {
    en: 'Members',
    es: 'Miembros',
    fr: 'Membres',
    de: 'Mitglieder',
    cn: '成员',
    ja: 'メンバー',
    ru: 'Участники',
    ko: '회원들'
  },
  {
    en: 'Member',
    es: 'Miembro',
    fr: 'Membre',
    de: 'Mitglied',
    cn: '成员',
    ja: 'メンバー',
    ru: 'Участник',
    ko: '회원'
  },
  {
    en: 'member',
    es: 'Miembro',
    fr: 'Membre',
    de: 'Mitglied',
    cn: '成员',
    ja: 'メンバー',
    ru: 'участник',
    ko: '회원'
  },
  {
    en: 'comment',
    es: 'comentario',
    fr: 'commentaire',
    de: 'Kommentar',
    cn: '评论',
    ja: 'コメント',
    ru: 'комментарий',
    ko: '댓글'
  },
  {
    en: 'comments',
    es: 'comentarios',
    fr: 'les commentaires',
    de: 'Kommentare',
    cn: '评论',
    ja: 'コメント',
    ru: 'комментарии',
    ko: '댓글들'
  },
  {
    en: 'Comment',
    es: 'Comentario',
    fr: 'Commentaire',
    de: 'Kommentar',
    cn: '评论',
    ja: 'コメント',
    ru: 'Комментарий',
    ko: '댓글'
  },
  {
    en: 'Comments',
    es: 'Comentarios',
    fr: 'Les commentaires',
    de: 'Kommentare',
    cn: '评论',
    ja: 'コメント',
    ru: 'Комментарии',
    ko: '댓글들'
  },
  {
    en: 'reply',
    es: 'respuesta',
    fr: 'réponse',
    de: 'Antwort',
    cn: '回复',
    ja: 'リプライ',
    ru: 'ответ',
    ko: '답글'
  },
  {
    en: 'replies',
    es: 'respuestas',
    fr: 'Réponses',
    de: 'Antworten',
    cn: '回复',
    ja: 'リプライ',
    ru: 'ответы',
    ko: '답글들'
  },
  {
    en: 'Reply',
    es: 'Respuesta',
    fr: 'Réponse',
    de: 'Antwort',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответ',
    ko: '답글'
  },
  {
    en: 'Replies',
    es: 'Respuestas',
    fr: 'Réponses',
    de: 'Antworten',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответы',
    ko: '답글들'
  },
  {
    en: 'like',
    es: 'gustar',
    fr: 'comme',
    de: 'Gefällt mir',
    cn: '喜欢',
    ja: 'いいね',
    ru: 'нравится',
    ko: '좋아요'
  },
  {
    en: 'liked',
    es: 'gustó',
    fr: 'aimé',
    de: 'Gefällt mir',
    cn: '已喜欢',
    ja: 'いいね',
    ru: 'понравилось',
    ko: '좋아요 받은 수'
  },
  {
    en: 'moderator',
    es: 'moderador',
    fr: 'modérateur',
    de: 'Moderator',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'модератор',
    ko: '운영자'
  },
  {
    en: 'moderators',
    es: 'moderadores',
    fr: 'modérateurs',
    de: 'Moderatoren',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'модераторы',
    ko: '운영자들'
  },
  {
    en: 'Moderator',
    es: 'Moderador',
    fr: 'Modérateur',
    de: 'Moderator',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'Модератор',
    ko: '운영자'
  },
  {
    en: 'Moderators',
    es: 'Moderadores',
    fr: 'Modérateurs',
    de: 'Moderatoren',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'Модераторы',
    ko: '운영자들'
  },
  {
    en: 'Loading',
    es: 'Cargando',
    fr: 'Chargement',
    de: 'Laden',
    cn: '加载中',
    ja: 'ロード中',
    ru: 'Загрузка',
    ko: '로딩 중'
  },
  {
    en: 'Settings',
    es: 'Ajustes',
    fr: 'Réglages',
    de: 'Einstellungen',
    cn: '设置',
    ja: '設定',
    ru: 'Настройки',
    ko: '설정'
  },
  {
    en: 'Top Contributors',
    es: 'Principales contribuyentes',
    fr: 'Meilleurs contributeurs',
    de: 'Top-Beiträger',
    cn: '顶级贡献者',
    ja: 'トップの貢献者',
    ru: 'Топовые участники',
    ko: '최고 기여자들'
  },
  {
    en: 'Recommend Discussions',
    es: 'Recomendar discusiones',
    fr: 'Recommander des discussions ',
    de: 'Empfohlene Diskussionen',
    cn: '推荐讨论',
    ja: 'お勧めのディスカッション',
    ru: 'Рекомендуемые дискуссии',
    ko: '추천 토론들'
  },
  {
    en: 'Share',
    es: 'Compartir',
    fr: 'Partager',
    de: 'Teilen',
    cn: '分享',
    ja: '共有',
    ru: 'Поделиться',
    ko: '공유'
  },
  {
    en: 'Email',
    es: 'Correo electrónico',
    fr: 'E-mail ',
    de: 'E-Mail',
    cn: '电子邮件',
    ja: 'メール',
    ru: 'Электронная почта',
    ko: '이메일'
  },
  {
    en: 'Report',
    es: 'Reporte',
    fr: 'Signaler',
    de: 'Melden',
    cn: '举报',
    ja: '報告する',
    ru: 'Пожаловаться',
    ko: '신고'
  },
  {
    en: 'Reports',
    es: 'Informes',
    fr: 'Rapports',
    de: 'Meldungen',
    cn: '举报',
    ja: '報告',
    ru: 'Жалобы',
    ko: '신고들'
  },
  {
    en: 'Edit discussion',
    es: 'Editar discusión',
    fr: 'Modifier la discussion',
    de: 'Diskussion bearbeiten',
    cn: '编辑讨论',
    ja: 'ディスカッションを編集',
    ru: 'Редактировать дискуссию',
    ko: '토론 수정'
  },
  {
    en: 'Category',
    es: 'Categoría',
    fr: 'Catégorie',
    de: 'Kategorie',
    cn: '分类',
    ja: 'カテゴリ',
    ru: 'Категория',
    ko: '카테고리'
  },
  {
    en: 'Categories',
    es: 'Categorías',
    fr: 'Catégories',
    de: 'Kategorien',
    cn: '分类',
    ja: 'カテゴリ',
    ru: 'Категории',
    ko: '카테고리들'
  },
  {
    en: 'Reply',
    es: 'Respuesta',
    fr: 'Réponse',
    de: 'Antwort',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответ',
    ko: '답글'
  },
  {
    en: 'Replies',
    es: 'respuestas',
    fr: 'réponses',
    de: 'Antworten',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответы',
    ko: '답글들'
  },
  {
    en: 'Click on the number count to who see liked.',
    es: 'Haga clic en el recuento de números a los que les gustó.',
    fr: 'Cliquez sur le nombre de compter à qui voir aimé.',
    de: 'Klicken Sie auf die Anzahl, um zu sehen, wer es gemocht hat.',
    cn: '点击数字查看谁点赞。',
    ja: 'いいねしたユーザーを見るには数字をクリックしてください',
    ru: 'Нажмите на число, чтобы увидеть, кто лайкнул.',
    ko: '좋아요를 본 사람 수를 보려면 숫자를 클릭하세요.'
  },
  {
    en: 'Inappropiate content',
    es: 'Contenido inapropiado',
    fr: 'Contenu inapproprié ',
    de: 'Unangemessener Inhalt',
    cn: '不当内容',
    ja: '不適切な内容',
    ru: 'Неприемлемый контент',
    ko: '부적절한 내용'
  },
  {
    en: 'Fraud or Spam',
    es: 'Fraude o Spam',
    fr: 'Fraude ou spam',
    de: 'Betrug oder Spam',
    cn: '欺诈或垃圾信息',
    ja: '詐欺またはスパム',
    ru: 'Мошенничество или спам',
    ko: '사기 또는 스팸'
  },
  {
    en: 'False information',
    es: 'Información falsa',
    fr: 'Fausse information',
    de: 'Falsche Informationen',
    cn: '虚假信息',
    ja: '虚偽の情報',
    ru: 'Ложная информация',
    ko: '거짓 정보'
  },
  {
    en: 'Nudity',
    es: 'Desnudez',
    fr: 'Nudité',
    de: 'Nacktheit',
    cn: '裸露',
    ja: 'ヌード',
    ru: 'Нагота',
    ko: '노출'
  },
  {
    en: 'Hate speech',
    es: 'El discurso del odio',
    fr: 'Discours de haine ',
    de: 'Hassrede',
    cn: '仇恨言论',
    ja: '憎悪的な発言',
    ru: 'Речь ненависти',
    ko: '혐오 발언'
  },
  {
    en: 'Violence',
    es: 'Violencia',
    fr: 'La violence',
    de: 'Gewalt',
    cn: '暴力',
    ja: '暴力',
    ru: 'Насилие',
    ko: '폭력'
  },
  {
    en: 'Harassment',
    es: 'Acoso',
    fr: 'Harcèlement',
    de: 'Belästigung',
    cn: '骚扰',
    ja: '嫌がらせ',
    ru: 'Харассмент',
    ko: '학대'
  },
  {
    en: 'Terrorism',
    es: 'Terrorismo',
    fr: 'Terrorisme',
    de: 'Terrorismus',
    cn: '恐怖主义',
    ja: 'テロリズム',
    ru: 'Терроризм',
    ko: '테러'
  },
  {
    en: 'Suicide or self injury',
    es: 'Suicidio o autolesión',
    fr: 'Suicide ou automutilation',
    de: 'Suizid oder Selbstverletzung',
    cn: '自杀或自残',
    ja: '自殺または自傷行為',
    ru: 'Самоубийство или самоповреждение',
    ko: '자살 또는 자해'
  },
  {
    en: 'Child abuse',
    es: 'Abuso infantil',
    fr: 'Abus sur mineur',
    de: 'Kindesmissbrauch',
    cn: '虐待儿童',
    ja: '児童虐待',
    ru: 'Детское насилие',
    ko: '아동 학대'
  },
  {
    en: 'Coin',
    es: 'Moneda',
    fr: 'Pièce de monnaie',
    de: 'Münze',
    cn: '硬币',
    ja: 'コイン',
    ru: 'Монета',
    ko: '코인'
  },
  {
    en: 'Coins',
    es: 'Monedas',
    fr: 'Pièces de monnaie',
    de: 'Münzen',
    cn: '硬币',
    ja: 'コイン',
    ru: 'Монеты',
    ko: '코인들'
  },
  {
    en: 'Discussion Title',
    es: 'Título de la discusión',
    fr: 'Titre de discussion',
    de: 'Diskussionstitel',
    cn: '讨论标题',
    ja: 'ディスカッションタイトル',
    ru: 'Заголовок дискуссии',
    ko: '토론 제목'
  },
  {
    en: 'Choose a Category',
    es: 'Elige una categoría',
    fr: 'Choisissez une catégorie',
    de: 'Wählen Sie eine Kategorie',
    cn: '选择分类',
    ja: 'カテゴリを選択',
    ru: 'Выберите категорию',
    ko: '카테고리 선택'
  },
  {
    en: 'Type here...',
    es: 'Escriba aquí...',
    fr: 'Écrivez ici...',
    de: 'Hier eingeben...',
    cn: '在这里输入...',
    ja: 'ここに入力...',
    ru: 'Печатайте здесь...',
    ko: '여기에 입력하세요...'
  },
  {
    en: 'Type something memorable....',
    es: 'Escriba algo memorable....',
    fr: 'Tapez quelque chose de mémorable....',
    de: 'Etwas Unvergessliches eingeben...',
    cn: '输入一些值得记住的内容...',
    ja: '印象に残る何かを入力してください...',
    ru: 'Введите что-то запоминающееся...',
    ko: '기억에 남는 내용을 입력하세요...'
  },
  {
    en: 'Publish',
    es: 'Publicar',
    fr: 'Publier',
    de: 'Veröffentlichen',
    cn: '发布',
    ja: '公開',
    ru: 'Опубликовать',
    ko: '게시'
  },
  {
    en: 'Sign in',
    es: 'Iniciar sesión',
    fr: "S'identifier",
    de: 'Anmelden',
    cn: '登录',
    ja: 'サインイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Mark all read',
    es: 'Marcar todo como leido',
    fr: 'Marquer tout comme lu',
    de: 'Alle als gelesen markieren',
    cn: '全部标记为已读',
    ja: '全て既読にする',
    ru: 'Отметить все как прочитанное',
    ko: '모두 읽음 표시'
  },
  {
    en: 'No notification',
    es: 'Sin notificación',
    fr: 'Aucune notification',
    de: 'Keine Benachrichtigungen',
    cn: '无通知',
    ja: '通知なし',
    ru: 'Нет уведомлений',
    ko: '알림 없음'
  },
  {
    en: 'Sign in to publish',
    es: 'Inicia sesión para publicar',
    fr: 'Connectez-vous pour publier',
    de: 'Anmelden, um zu veröffentlichen',
    cn: '登录以发布',
    ja: '公開するにはサインインしてください',
    ru: 'Войдите, чтобы опубликовать',
    ko: '게시하려면 로그인하세요'
  },
  {
    en: 'Type something memorable...',
    es: 'Escriba algo memorable...',
    fr: 'Tapez quelque chose de mémorable...',
    de: 'Etwas Unvergessliches eingeben...',
    cn: '输入一些值得记住的内容...',
    ja: '印象に残る何かを入力してください...',
    ru: 'Введите что-то запоминающееся...',
    ko: '기억에 남는 내용을 입력하세요...'
  },
  {
    en: 'Please select a language',
    es: 'Por favor, seleccione un idioma',
    fr: 'Veuillez sélectionner une langue',
    de: 'Bitte wählen Sie eine Sprache',
    cn: '请选择语言',
    ja: '言語を選択してください',
    ru: 'Пожалуйста, выберите язык',
    ko: '언어를 선택하세요'
  },
  {
    en: 'Popular',
    es: 'Popular',
    fr: 'Populaire',
    de: 'Beliebt',
    cn: '热门',
    ja: '人気',
    ru: 'Популярные',
    ko: '인기'
  },
  {
    en: 'Recent',
    es: 'Reciente',
    fr: 'Récent',
    de: 'Aktuell',
    cn: '最近',
    ja: '最近',
    ru: 'Недавние',
    ko: '최근'
  },
  {
    en: 'Unanswered',
    es: 'Sin respuesta',
    fr: 'Sans réponse',
    de: 'Unbeantwortet',
    cn: '未解答',
    ja: '未解決',
    ru: 'Без ответа',
    ko: '미답변'
  },
  {
    en: 'Joined',
    es: 'Unido',
    fr: 'Rejoint',
    de: 'Beigetreten',
    cn: '加入',
    ja: '参加した',
    ru: 'Присоединился',
    ko: '가입일'
  },
  {
    en: 'Go to Discussions',
    es: 'Ir a Discusiones',
    fr: 'Aller aux Discussions',
    de: 'Zu Diskussionen gehen',
    cn: '前往讨论',
    ja: 'ディスカッションに移動',
    ru: 'Перейти к дискуссиям',
    ko: '토론으로 이동'
  },
  {
    en: 'Unable to update status! Please try again later.',
    es: '¡No se puede actualizar el estado! Por favor, inténtelo de nuevo más tarde.',
    fr: 'Impossible de mettre à jour le statut ! Veuillez réessayer plus tard.',
    de: 'Aktualisierung des Status nicht möglich! Bitte versuchen Sie es später erneut.',
    cn: '无法更新状态！请稍后再试。',
    ja: 'ステータスを更新できませんでした！後でもう一度お試しください。',
    ru: 'Не удалось обновить статус! Пожалуйста, повторите попытку позже.',
    ko: '상태 업데이트를 할 수 없습니다! 나중에 다시 시도하세요.'
  },
  {
    en: 'Discussion status updated',
    es: 'Estado de discusión actualizado',
    fr: 'Statut de la discussion mis à jour',
    de: 'Diskussionsstatus aktualisiert',
    cn: '讨论状态已更新',
    ja: 'ディスカッションステータスが更新されました',
    ru: 'Статус дискуссии обновлен',
    ko: '토론 상태가 업데이트되었습니다'
  },
  {
    en: 'No Discussion',
    es: 'Sin discusión',
    fr: 'Pas de discussion',
    de: 'Keine Diskussionen',
    cn: '无讨论',
    ja: 'ディスカッションがありません',
    ru: 'Нет дискуссий',
    ko: '토론 없음'
  },
  {
    en: 'Notification',
    es: 'Notificación',
    fr: 'Notification',
    de: 'Benachrichtigung',
    cn: '通知',
    ja: '通知',
    ru: 'Уведомление',
    ko: '알림'
  },
  {
    en: 'Notifications',
    es: 'Notificaciones',
    fr: 'Avis',
    de: 'Benachrichtigungen',
    cn: '通知',
    ja: '通知',
    ru: 'Уведомления',
    ko: '알림들'
  },
  {
    en: 'Mark All Read',
    es: 'Marcar todo leer',
    fr: 'Marquer tous lire',
    de: 'Alle als gelesen markieren',
    cn: '全部标记为已读',
    ja: '全て既読にする',
    ru: 'Отметить все как прочитанное',
    ko: '모두 읽음 표시'
  },
  {
    en: 'Cancel',
    es: 'Cancelar',
    fr: 'Annuler',
    de: 'Abbrechen',
    cn: '取消',
    ja: 'キャンセル',
    ru: 'Отменить',
    ko: '취소'
  },
  {
    en: 'Yes, Delete',
    es: 'Sí, Eliminar',
    fr: 'Oui, supprimer',
    de: 'Ja, Löschen',
    cn: '是的，删除',
    ja: 'はい、削除',
    ru: 'Да, удалить',
    ko: '예, 삭제'
  },
  {
    en: 'Delete discussion',
    es: 'Eliminar discusión',
    fr: 'Supprimer la discussion',
    de: 'Diskussion löschen',
    cn: '删除讨论',
    ja: 'ディスカッションを削除',
    ru: 'Удалить дискуссию',
    ko: '토론 삭제'
  },
  {
    en: 'Are you sure you want to delete?',
    es: '¿Estás seguro de que quieres eliminar?',
    fr: 'Etes-vous sûr que vous voulez supprimer?',
    de: 'Sind Sie sicher, dass Sie löschen möchten?',
    cn: '确定要删除吗？',
    ja: '削除してもよろしいですか？',
    ru: 'Вы уверены, что хотите удалить?',
    ko: '정말로 삭제하시겠습니까?'
  },
  {
    en: 'Oops! Page not found or has been deleted.',
    es: '¡Ups! Página no encontrada o eliminada.',
    fr: 'Oh là là! Page introuvable ou supprimée.',
    de: 'Ups! Seite nicht gefunden oder wurde gelöscht.',
    cn: '哎呀！页面未找到或已被删除。',
    ja: 'おっと！ページが見つかりませんでしたまたは削除されました。',
    ru: 'Ой! Страница не найдена или была удалена.',
    ko: '이런! 페이지를 찾을 수 없거나 삭제되었습니다.'
  },
  {
    en: 'Back to home',
    es: 'Vuelve a casa',
    fr: "Retour à l'accueil",
    de: 'Zurück zur Startseite',
    cn: '返回首页',
    ja: 'ホームに戻る',
    ru: 'Вернуться на главную',
    ko: '홈으로 돌아가기'
  },
  {
    en: 'Page not found',
    es: 'Página no encontrada',
    fr: 'Page non trouvée',
    de: 'Seite nicht gefunden',
    cn: '页面未找到',
    ja: 'ページが見つかりません',
    ru: 'Страница не найдена',
    ko: '페이지를 찾을 수 없음'
  },
  {
    en: 'Account verified successfully! Please sign in to continue.',
    es: '¡Cuenta verificada con éxito! Por favor inicie sesión para continuar.',
    fr: 'Compte vérifié avec succès ! Veuillez vous connecter pour continuer.',
    de: 'Konto erfolgreich verifiziert! Bitte melden Sie sich an, um fortzufahren.',
    cn: '帐号验证成功！请登录以继续。',
    ja: 'アカウントが正常に確認されました！続行するにはサインインしてください。',
    ru: 'Аккаунт успешно подтвержден! Пожалуйста, войдите, чтобы продолжить.',
    ko: '계정이 성공적으로 인증되었습니다! 계속하려면 로그인하세요.'
  },
  {
    en: 'Account settings',
    es: 'Configuraciones de la cuenta',
    fr: 'Paramètres du compte',
    de: 'Kontoeinstellungen',
    cn: '帐号设置',
    ja: 'アカウント設定',
    ru: 'Настройки аккаунта',
    ko: '계정 설정'
  },
  {
    en: 'In reply to [] comment',
    es: 'En respuesta al comentario de []',
    fr: 'En réponse au commentaire []',
    de: 'Als Antwort auf [] Kommentar',
    cn: '回复[]评论',
    ja: '[]のコメントに返信中',
    ru: 'В ответ на [] комментарий',
    ko: '[] 댓글에 대한 답글'
  },
  {
    en: 'Send reply',
    es: 'Enviar respuesta',
    fr: 'Envoyer une réponse',
    de: 'Antwort senden',
    cn: '发送回复',
    ja: '返信を送信',
    ru: 'Отправить ответ',
    ko: '답글 보내기'
  },
  {
    en: 'User',
    es: 'Usuario',
    fr: 'Utilisateur',
    de: 'Benutzer',
    cn: '用户',
    ja: 'ユーザー',
    ru: 'Пользователь',
    ko: '사용자'
  },
  {
    en: 'Pageviews',
    es: 'Visitas a páginas',
    fr: 'Avis de page ',
    de: 'Seitenaufrufe',
    cn: '页面浏览量',
    ja: 'ページビュー',
    ru: 'Просмотры страницы',
    ko: '페이지뷰'
  },
  {
    en: 'Dashboard',
    es: 'Salpicadero',
    fr: 'Tableau de bord ',
    de: 'Dashboard',
    cn: '仪表盘',
    ja: 'ダッシュボード',
    ru: 'Панель управления',
    ko: '대시보드'
  },
  {
    en: 'Name',
    es: 'Nombre',
    fr: 'Nom',
    de: 'Name',
    cn: '名称',
    ja: '名前',
    ru: 'Имя',
    ko: '이름'
  },
  {
    en: 'Date',
    es: 'Fecha',
    fr: 'Date',
    de: 'Datum',
    cn: '日期',
    ja: '日付',
    ru: 'Дата',
    ko: '날짜'
  },
  {
    en: 'Role',
    es: 'Papel',
    fr: 'Rôle ',
    de: 'Rolle',
    cn: '角色',
    ja: '役割',
    ru: 'Роль',
    ko: '역할'
  },
  {
    en: 'Actions',
    es: 'Acción',
    fr: 'Action ',
    de: 'Aktionen',
    cn: '操作',
    ja: 'アクション',
    ru: 'Действия',
    ko: '동작들'
  },
  {
    en: 'Action',
    es: 'Comportamiento',
    fr: 'Actes',
    de: 'Aktion',
    cn: '操作',
    ja: 'アクション',
    ru: 'Действие',
    ko: '동작'
  },
  {
    en: 'Edit',
    es: 'Editar',
    fr: 'Modifier ',
    de: 'Bearbeiten',
    cn: '编辑',
    ja: '編集',
    ru: 'Редактировать',
    ko: '편집'
  },
  {
    en: 'View',
    es: 'Ver',
    fr: 'Vue',
    de: 'Anzeigen',
    cn: '查看',
    ja: '表示',
    ru: 'Просмотр',
    ko: '보기'
  },
  {
    en: 'Username',
    es: 'Nombre de usuario',
    fr: "Nom de l'utilisateur ",
    de: 'Benutzername',
    cn: '用户名',
    ja: 'ユーザー名',
    ru: 'Имя пользователя',
    ko: '사용자 이름'
  },
  {
    en: 'Status',
    es: 'Estado',
    fr: 'Statut',
    de: 'Status',
    cn: '状态',
    ja: 'ステータス',
    ru: 'Статус',
    ko: '상태'
  },
  {
    en: 'Active',
    es: 'Activo',
    fr: 'Actif',
    de: 'Aktiv',
    cn: '活跃',
    ja: 'アクティブ',
    ru: 'Активный',
    ko: '활성화됨'
  },
  {
    en: 'Banned',
    es: 'Prohibido',
    fr: 'Banni',
    de: 'Gesperrt',
    cn: '已封禁',
    ja: '禁止',
    ru: 'Заблокирован',
    ko: '금지됨'
  },
  {
    en: 'Users',
    es: 'Usuarios',
    fr: 'Désactivée ',
    de: 'Benutzer',
    cn: '用户',
    ja: 'ユーザー',
    ru: 'Пользователи',
    ko: '사용자들'
  },
  {
    en: 'Disabled',
    es: 'Discapacitado',
    fr: 'Fermer',
    de: 'Deaktiviert',
    cn: '已禁用',
    ja: '無効',
    ru: 'Отключен',
    ko: '비활성화됨'
  },
  {
    en: 'Close',
    es: 'Cambiar estado',
    fr: 'Utilisateurs',
    de: 'Schließen',
    cn: '关闭',
    ja: '閉じる',
    ru: 'Закрыть',
    ko: '닫기'
  },
  {
    en: 'Member since',
    es: 'Miembro desde',
    fr: 'Membre depuis',
    de: 'Mitglied seit',
    cn: '会员自',
    ja: '登録日',
    ru: 'Участник с',
    ko: '가입일'
  },
  {
    en: 'Change details',
    es: 'Cambiar detalles',
    fr: 'Modifier les détails',
    de: 'Details ändern',
    cn: '更改详细信息',
    ja: '詳細を変更',
    ru: 'Изменить данные',
    ko: '상세정보 변경'
  },
  {
    en: 'Change password',
    es: 'Cambiar la contraseña',
    fr: 'Changer le mot de passe',
    de: 'Passwort ändern',
    cn: '更改密码',
    ja: 'パスワードを変更',
    ru: 'Изменить пароль',
    ko: '비밀번호 변경'
  },
  {
    en: 'Type current password to update changes',
    es: 'Escriba la contraseña actual para actualizar los cambios',
    fr: 'Tapez le mot de passe actuel pour mettre à jour les modifications',
    de: 'Aktuelle Passwort eingeben, um Änderungen zu aktualisieren',
    cn: '输入当前密码以更新更改',
    ja: '変更を更新するには現在のパスワードを入力してください',
    ru: 'Введите текущий пароль для обновления изменений',
    ko: '변경 사항을 업데이트하려면 현재 비밀번호를 입력하세요'
  },
  {
    en: 'Type new password',
    es: 'Escribe una nueva contraseña',
    fr: 'Tapez le nouveau mot de passe',
    de: 'Neues Passwort eingeben',
    cn: '输入新密码',
    ja: '新しいパスワードを入力してください',
    ru: 'Введите новый пароль',
    ko: '새로운 비밀번호 입력'
  },
  {
    en: 'Upload photo',
    es: 'Subir foto',
    fr: 'Envoyer la photo',
    de: 'Foto hochladen',
    cn: '上传照片',
    ja: '写真をアップロード',
    ru: 'Загрузить фото',
    ko: '사진 업로드'
  },
  {
    en: 'Change status',
    es: 'Cambiar estado',
    fr: 'Changer de statut',
    de: 'Status ändern',
    cn: '更改状态',
    ja: 'ステータスを変更',
    ru: 'Изменить статус',
    ko: '상태 변경'
  },
  {
    en: 'Change role',
    es: 'Cambiar el papel',
    fr: 'Changer de rôle',
    de: 'Rolle ändern',
    cn: '更改角色',
    ja: '役割を変更',
    ru: 'Изменить роль',
    ko: '역할 변경'
  },
  {
    en: 'Title',
    es: 'Título',
    fr: 'Titre',
    de: 'Titel',
    cn: '标题',
    ja: 'タイトル',
    ru: 'Заголовок',
    ko: '제목'
  },
  {
    en: 'Answered',
    es: 'Respondi',
    fr: 'Répondu',
    de: 'Beantwortet',
    cn: '已回答',
    ja: '回答済み',
    ru: 'Отвечен',
    ko: '답변됨'
  },
  {
    en: 'Administrator',
    es: 'Administrador',
    fr: 'Administrateur',
    de: 'Administrator',
    cn: '管理员',
    ja: '管理者',
    ru: 'Администратор',
    ko: '관리자'
  },
  {
    en: 'admin',
    es: 'administrador',
    fr: 'administrateur',
    de: 'admin',
    cn: '管理员',
    ja: '管理者',
    ru: 'админ',
    ko: '관리자'
  },
  {
    en: 'Type',
    es: 'Tipo',
    fr: 'Taper',
    de: 'Typ',
    cn: '类型',
    ja: 'タイプ',
    ru: 'Тип',
    ko: '종류'
  },
  {
    en: 'Color',
    es: 'Color',
    fr: 'Couleur',
    de: 'Farbe',
    cn: '颜色',
    ja: '色',
    ru: 'Цвет',
    ko: '색상'
  },
  {
    en: 'Add',
    es: 'Añadir',
    fr: 'Ajouter',
    de: 'Hinzufügen',
    cn: '添加',
    ja: '追加',
    ru: 'Добавить',
    ko: '추가'
  },
  {
    en: 'Title is too short.',
    es: 'El título es demasiado corto.',
    fr: 'Le titre est trop court.',
    de: 'Titel ist zu kurz.',
    cn: '标题太短。',
    ja: 'タイトルが短すぎます。',
    ru: 'Заголовок слишком короткий.',
    ko: '제목이 너무 짧습니다.'
  },
  {
    en: 'Description is required',
    es: 'Se requiere descripción',
    fr: 'La description est obligatoire',
    de: 'Beschreibung ist erforderlich',
    cn: '描述是必需的',
    ja: '説明が必要です',
    ru: 'Требуется описание',
    ko: '설명이 필요합니다'
  },
  {
    en: 'Category created successfully!',
    es: '¡Categoría creada con éxito!',
    fr: 'Catégorie créée avec succès !',
    de: 'Kategorie erfolgreich erstellt!',
    cn: '分类创建成功！',
    ja: 'カテゴリが正常に作成されました！',
    ru: 'Категория успешно создана!',
    ko: '카테고리가 성공적으로 생성되었습니다!'
  },
  {
    en: 'Unable to create category. Please try again!',
    es: 'No se puede crear la categoría. ¡Inténtalo de nuevo!',
    fr: 'Impossible de créer la catégorie. Veuillez réessayer!',
    de: 'Kategorie konnte nicht erstellt werden. Bitte versuchen Sie es erneut!',
    cn: '无法创建分类。请重试！',
    ja: 'カテゴリを作成できませんでした。後でもう一度お試しください！',
    ru: 'Не удалось создать категорию. Пожалуйста, повторите попытку!',
    ko: '카테고리를 생성할 수 없습니다. 다시 시도하세요!'
  },
  {
    en: 'Comment is blank!',
    es: '¡El comentario está en blanco!',
    fr: 'Le commentaire est vide !',
    de: 'Kommentar ist leer!',
    cn: '评论空白',
    ja: 'コメントは空白です！',
    ru: 'Комментарий пуст!',
    ko: '댓글이 비어 있습니다!'
  },
  {
    en: 'Unable to save reply.',
    es: 'No se puede guardar la respuesta.',
    fr: "Impossible d'enregistrer la réponse.",
    de: 'Antwort kann nicht gespeichert werden.',
    cn: '无法保存回复。',
    ja: '返信を保存できません。',
    ru: 'Не удалось сохранить ответ.',
    ko: '답장을 저장할 수 없습니다.'
  },
  {
    en: 'Unable to save comment.',
    es: 'No se puede guardar el comentario.',
    fr: "Impossible d'enregistrer le commentaire.",
    de: 'Kommentar kann nicht gespeichert werden.',
    cn: '无法保存评论。',
    ja: 'コメントを保存できません。',
    ru: 'Не удалось сохранить комментарий.',
    ko: '댓글을 저장할 수 없습니다.'
  },
  {
    en: 'Edit category',
    es: 'Editar categoria',
    fr: 'Modifier la catégorie',
    de: 'Kategorie bearbeiten',
    cn: '编辑分类',
    ja: 'カテゴリの編集',
    ru: 'Редактировать категорию',
    ko: '카테고리 편집'
  },
  {
    en: 'Category updated successfully',
    es: 'Categoría actualizada con éxito',
    fr: 'Catégorie mise à jour avec succès',
    de: 'Kategorie erfolgreich aktualisiert',
    cn: '分类更新成功',
    ja: 'カテゴリが正常に更新されました',
    ru: 'Категория успешно обновлена!',
    ko: '카테고리가 성공적으로 업데이트되었습니다'
  },
  {
    en: 'Unable to update category. Please try again!',
    es: 'No se puede actualizar la categoría. ¡Inténtalo de nuevo!',
    fr: 'Impossible de mettre à jour la catégorie. Veuillez réessayer!',
    de: 'Kategorie konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut!',
    cn: '无法更新分类。请重试！',
    ja: 'カテゴリを更新できませんでした。後でもう一度お試しください！',
    ru: 'Не удалось обновить категорию. Пожалуйста, повторите попытку!',
    ko: '카테고리를 업데이트할 수 없습니다. 다시 시도하세요!'
  },
  {
    en: 'yes',
    es: 'sí',
    fr: 'oui',
    de: 'ja',
    cn: '是',
    ja: 'はい',
    ru: 'да',
    ko: '예'
  },
  {
    en: 'no',
    es: 'no',
    fr: 'non',
    de: 'nein',
    cn: '否',
    ja: 'いいえ',
    ru: 'нет',
    ko: '아니오'
  },
  {
    en: 'Apply filter',
    es: 'Aplicar filtro',
    fr: 'Appliquer le filtre',
    de: 'Filter anwenden',
    cn: '应用过滤器',
    ja: 'フィルターを適用する',
    ru: 'Применить фильтр',
    ko: '필터 적용'
  },
  {
    en: 'Incorrect email/username or password!',
    es: '¡Correo electrónico/nombre de usuario o contraseña incorrectos!',
    fr: "E-mail/nom d'utilisateur ou mot de passe incorrect !",
    de: 'Falsche E-Mail/Benutzername oder Passwort!',
    cn: '电子邮件/用户名或密码不正确！',
    ja: 'メール/ユーザー名またはパスワードが正しくありません！',
    ru: 'Неправильный адрес электронной почты/имя пользователя или пароль!',
    ko: '잘못된 이메일/사용자명 또는 비밀번호입니다!'
  },
  {
    en: 'Account is banned. Please contact the community admin.',
    es: 'La cuenta está prohibida. Póngase en contacto con el administrador de la comunidad.',
    fr: "Le compte est banni. Veuillez contacter l'administrateur de la communauté.",
    de: 'Konto ist gesperrt. Bitte kontaktieren Sie den Community-Administrator.',
    cn: '帐号已被封禁。请联系社区管理员。',
    ja: 'アカウントが禁止されています。コミュニティの管理者に連絡してください。',
    ru: 'Аккаунт заблокирован. Пожалуйста, свяжитесь с администратором сообщества.',
    ko: '계정이 금지되었습니다. 커뮤니티 관리자에게 문의하세요.'
  },
  {
    en: 'Account is inactive. Please verify account.',
    es: 'La cuenta está inactiva. Verifique la cuenta.',
    fr: 'Le compte est inactif. Veuillez vérifier le compte.',
    de: 'Konto ist inaktiv. Bitte verifizieren Sie Ihr Konto.',
    cn: '帐号处于非活跃状态。请验证帐号。',
    ja: 'アカウントが無効です。アカウントを確認してください。',
    ru: 'Аккаунт неактивен. Пожалуйста, подтвердите аккаунт.',
    ko: '계정이 비활성화되었습니다. 계정을 인증하세요.'
  },
  {
    en: 'Account is inactive.',
    es: 'La cuenta está inactiva.',
    fr: 'Le compte est inactif.',
    de: 'Konto ist inaktiv.',
    cn: '帐号处于非活跃状态。',
    ja: 'アカウントが無効です。',
    ru: 'Аккаунт неактивен.',
    ko: '계정이 비활성화되었습니다.'
  },
  {
    en: 'Successfully signed in!',
    es: '¡Iniciado sesión correctamente!',
    fr: 'Connexion réussie !',
    de: 'Anmeldung erfolgreich!',
    cn: '登录成功！',
    ja: 'サインインに成功しました！',
    ru: 'Успешно вошли!',
    ko: '로그인이 성공적으로 완료되었습니다!'
  },
  {
    en: 'Account is suspended. Please contact the community admin.',
    es: 'La cuenta está suspendida. Póngase en contacto con el administrador de la comunidad.',
    fr: "Le compte est suspendu. Veuillez contacter l'administrateur de la communauté.",
    de: 'Konto ist gesperrt. Bitte kontaktieren Sie den Community-Administrator.',
    cn: '帐号已被暂停。请联系社区管理员。',
    ja: 'アカウントが一時停止されています。コミュニティの管理者に連絡してください。',
    ru: 'Аккаунт приостановлен. Пожалуйста, свяжитесь с администратором сообщества.',
    ko: '계정이 정지되었습니다. 커뮤니티 관리자에게 문의하세요.'
  },
  {
    en: 'Click here to verify your account.',
    es: 'Haga clic aquí para verificar su cuenta',
    fr: 'Cliquez ici pour vérifier votre compte',
    de: 'Klicken Sie hier, um Ihr Konto zu verifizieren.',
    cn: '点击这里验证您的帐号。',
    ja: 'アカウントを確認するにはここをクリックしてください。',
    ru: 'Нажмите здесь, чтобы подтвердить свой аккаунт.',
    ko: '계정을 인증하려면 여기를 클릭하세요.'
  },
  {
    en: 'Please verify account to continue.',
    es: 'Verifique la cuenta para continuar.',
    fr: 'Veuillez vérifier le compte pour continuer.',
    de: 'Bitte verifizieren Sie Ihr Konto, um fortzufahren.',
    cn: '请验证帐号以继续。',
    ja: '続行するにはアカウントを確認してください。',
    ru: 'Пожалуйста, подтвердите аккаунт, чтобы продолжить.',
    ko: '계정을 인증하세요.'
  },
  {
    en: 'Unable to verify user. Please try again later.',
    es: 'No se puede verificar el usuario. Por favor, inténtelo de nuevo más tarde.',
    fr: "Impossible de vérifier l'utilisateur. Veuillez réessayer plus tard.",
    de: 'Benutzer konnte nicht verifiziert werden. Bitte versuchen Sie es später erneut.',
    cn: '无法验证用户。请稍后再试。',
    ja: 'ユーザーの確認ができませんでした。後でもう一度お試しください。',
    ru: 'Не удалось подтвердить пользователя. Пожалуйста, повторите попытку позже.',
    ko: '사용자 인증에 실패했습니다. 나중에 다시 시도하세요.'
  },
  {
    en: 'Account verified successfully! Please sign in to continue.',
    es: '¡Cuenta verificada con éxito! Por favor inicie sesión para continuar.',
    fr: 'Compte vérifié avec succès ! Veuillez vous connecter pour continuer.',
    de: 'Konto erfolgreich verifiziert! Bitte melden Sie sich an, um fortzufahren.',
    cn: '帐号验证成功！请登录以继续。',
    ja: 'アカウントが正常に確認されました！続行するにはサインインしてください。',
    ru: 'Аккаунт успешно подтвержден! Пожалуйста, войдите, чтобы продолжить.',
    ko: '계정이 성공적으로 인증되었습니다! 계속하려면 로그인하세요.'
  },
  {
    en: 'Email does not exist in our record.',
    es: 'El correo electrónico no existe en nuestro registro.',
    fr: "L'e-mail n'existe pas dans notre dossier",
    de: 'E-Mail existiert nicht in unseren Aufzeichnungen.',
    cn: '电子邮件在我们的记录中不存在。',
    ja: '記録に存在しないメールアドレスです。',
    ru: 'Адрес электронной почты не существует в наших записях.',
    ko: '이메일이 기록에 없습니다.'
  },
  {
    en: 'Account recovery',
    es: 'Recuperación de Cuenta',
    fr: 'Récupération du compte',
    de: 'Kontowiederherstellung',
    cn: '帐号恢复',
    ja: 'アカウントの復旧',
    ru: 'Восстановление аккаунта',
    ko: '계정 복구'
  },
  {
    en: 'Email already exist! Please try password reset or verify your account.',
    es: '¡Ya existe el correo electrónico! Intente restablecer la contraseña o verifique su cuenta.',
    fr: "L'e-mail existe déjà ! Veuillez essayer de réinitialiser le mot de passe ou vérifier votre compte.",
    de: 'E-Mail existiert bereits! Bitte versuchen Sie es mit dem Zurücksetzen des Passworts oder verifizieren Sie Ihr Konto.',
    cn: '电子邮件已存在！请尝试重置密码或验证您的帐号。',
    ja: 'メールアドレスはすでに存在しています！パスワードのリセットを試すか、アカウントを確認してください。',
    ru: 'Адрес электронной почты уже существует! Пожалуйста, попробуйте сбросить пароль или подтвердите свой аккаунт.',
    ko: '이미 이메일이 존재합니다! 비밀번호 재설정 또는 계정을 인증하세요.'
  },
  {
    en: 'Failed. Please try again later.',
    es: 'Fallido. Por favor, inténtelo de nuevo más tarde.',
    fr: 'Échoué. Veuillez réessayer plus tard',
    de: 'Fehlgeschlagen. Bitte versuchen Sie es später erneut.',
    cn: '失败。请稍后再试。',
    ja: '失敗しました。後でもう一度お試しください。',
    ru: 'Не удалось. Пожалуйста, повторите попытку позже.',
    ko: '실패했습니다. 나중에 다시 시도하세요.'
  },
  {
    en: 'Uploading image....',
    es: 'Subiendo imagen....',
    fr: "Téléchargement de l'image....",
    de: 'Bild wird hochgeladen....',
    cn: '正在上传图片....',
    ja: '画像をアップロード中....',
    ru: 'Загрузка изображения....',
    ko: '이미지 업로드 중....'
  },
  {
    en: 'Image uploaded successfully!',
    es: '¡Imagen cargada con éxito!',
    fr: 'Image téléchargée avec succès !',
    de: 'Bild erfolgreich hochgeladen!',
    cn: '图片上传成功！',
    ja: '画像が正常にアップロードされました！',
    ru: 'Изображение успешно загружено!',
    ko: '이미지가 성공적으로 업로드되었습니다!'
  },
  {
    en: 'Current password is required to make changes.',
    es: 'Se requiere contraseña actual para hacer cambios.',
    fr: 'Le mot de passe actuel est requis pour apporter des modifications.',
    de: 'Aktuelles Passwort ist erforderlich, um Änderungen vorzunehmen.',
    cn: '需要当前密码以进行更改。',
    ja: '変更を行うには現在のパスワードが必要です。',
    ru: 'Текущий пароль требуется для внесения изменений.',
    ko: '변경 사항을 적용하려면 현재 비밀번호를 입력하세요.'
  },
  {
    en: 'Account updated successfully!',
    es: '¡Cuenta actualizada con éxito!',
    fr: 'Compte mis à jour avec succès !',
    de: 'Konto erfolgreich aktualisiert!',
    cn: '帐号更新成功！',
    ja: 'アカウントが正常に更新されました',
    ru: 'Аккаунт успешно обновлен!',
    ko: '계정이 성공적으로 업데이트되었습니다!'
  },
  {
    en: 'Unable to make changes! Current password is incorrect.',
    es: '¡No se pueden hacer cambios! La contraseña actual es incorrecta.',
    fr: "Impossible d'apporter des modifications ! Ce mot de passe est incorrect.",
    de: 'Änderungen konnten nicht vorgenommen werden! Aktuelles Passwort ist falsch.',
    cn: '无法进行更改！当前密码不正确。',
    ja: '変更を行えませんでした！現在のパスワードが正しくありません。',
    ru: 'Невозможно внести изменения! Текущий пароль неверен.',
    ko: '변경 사항을 적용할 수 없습니다! 현재 비밀번호가 일치하지 않습니다.'
  },
  {
    en: 'Password is too short! Minimum character is six.',
    es: '¡La contraseña es demasiado corta! El carácter mínimo es seis.',
    fr: 'Le mot de passe est trop court! Le caractère minimum est six.',
    de: 'Passwort ist zu kurz! Mindestens sechs Zeichen erforderlich.',
    cn: '密码太短！最少六个字符。',
    ja: 'パスワードが短すぎます！最小6文字以上を入力してください。',
    ru: 'Пароль слишком короткий! Минимальное количество символов - шесть.',
    ko: '비밀번호가 너무 짧습니다! 최소 6자 이상이어야 합니다.'
  },
  {
    en: 'Password updated successfully!',
    es: '¡Contraseña actualizada exitosamente!',
    fr: 'Mot de passe mis à jour avec succès!',
    de: 'Passwort erfolgreich aktualisiert!',
    cn: '密码更新成功！',
    ja: 'パスワードが正常に更新されました！',
    ru: 'Пароль успешно обновлен!',
    ko: '비밀번호가 성공적으로 업데이트되었습니다!'
  },
  {
    en: 'Unable to change password. Please try again.',
    es: 'No se puede cambiar la contraseña. Inténtalo de nuevo.',
    fr: 'Impossible de changer le mot de passe. Veuillez réessayer.',
    de: 'Passwort konnte nicht geändert werden. Bitte versuchen Sie es erneut.',
    cn: '无法更改密码。请重试。',
    ja: 'パスワードを変更できません。もう一度お試しください。',
    ru: 'Не удалось изменить пароль. Пожалуйста, попробуйте снова.',
    ko: '비밀번호를 변경할 수 없습니다. 다시 시도해주세요.'
  },
  {
    en: 'Add category',
    es: 'Añadir categoría',
    fr: 'Ajouter une catégorie',
    de: 'Kategorie hinzufügen',
    cn: '添加分类',
    ja: 'カテゴリを追加',
    ru: 'Добавить категорию',
    ko: '카테고리 추가'
  },
  {
    en: 'Create a category',
    es: 'Crear una categoría',
    fr: 'Créer une catégorie',
    de: 'Kategorie erstellen',
    cn: '创建分类',
    ja: 'カテゴリを作成',
    ru: 'Создать категорию',
    ko: '카테고리 생성'
  },
  {
    en: 'Authentication',
    es: 'Autenticación',
    fr: 'Authentification',
    de: 'Authentifizierung',
    cn: '身份验证',
    ja: '認証',
    ru: 'Аутентификация',
    ko: '인증'
  },
  {
    en: 'No',
    es: 'No',
    fr: 'Aucun',
    de: 'Nein',
    cn: '否',
    ja: 'いいえ',
    ru: 'Нет',
    ko: '아니요'
  },
  {
    en: 'Yes',
    es: 'Sí',
    fr: 'Oui',
    de: 'Ja',
    cn: '是',
    ja: 'はい',
    ru: 'Да',
    ko: '예'
  },
  {
    en: 'Create a Category',
    es: 'Crear una categoría',
    fr: 'Créer une catégorie',
    de: 'Kategorie erstellen',
    cn: '创建分类',
    ja: 'カテゴリを作成',
    ru: 'Создать категорию',
    ko: '카테고리 생성'
  },
  {
    en: 'Authentication required',
    es: 'Se requiere autenticación',
    fr: 'Authentification requise',
    de: 'Authentifizierung erforderlich',
    cn: '需要身份验证',
    ja: '認証が必要です',
    ru: 'Требуется аутентификация',
    ko: '인증이 필요합니다'
  },
  {
    en: 'Save',
    es: 'Guardar',
    fr: 'Enregistrer',
    de: 'Speichern',
    cn: '保存',
    ja: '保存',
    ru: 'Сохранить',
    ko: '저장'
  },
  {
    en: 'Choose one or more',
    es: 'Elija uno o más',
    fr: 'Choisissez un ou plusieurs ',
    de: 'Eine oder mehrere auswählen',
    cn: '选择一个或多个',
    ja: '1つ以上選択してください',
    ru: 'Выберите одну или несколько',
    ko: '하나 이상 선택'
  },
  {
    en: 'Description',
    es: 'Descripción',
    fr: 'La description',
    de: 'Beschreibung',
    cn: '描述',
    ja: '説明',
    ru: 'Описание',
    ko: '설명'
  },
  {
    en: 'Edit category',
    es: 'Editar categoría',
    fr: 'Modifier la catégorie',
    de: 'Kategorie bearbeiten',
    cn: '编辑分类',
    ja: 'カテゴリを編集',
    ru: 'Редактировать категорию',
    ko: '카테고리 편집'
  },
  {
    en: 'Metadata',
    es: 'Metadata',
    fr: 'Métadonnées',
    de: 'Metadaten',
    cn: '元数据',
    ja: 'メタデータ',
    ru: 'Метаданные',
    ko: '메타데이터'
  },
  {
    en: 'Site favicon',
    es: 'Sitio Favicon',
    fr: 'Favicon du site',
    de: 'Seiten-Favicon',
    cn: '站点图标',
    ja: 'サイトのファビコン',
    ru: 'Иконка сайта',
    ko: '사이트 파비콘'
  },
  {
    en: 'Site logo',
    es: 'Logotipo del sitio',
    fr: 'Logo du site ',
    de: 'Seiten-Logo',
    cn: '站点标志',
    ja: 'サイトのロゴ',
    ru: 'Логотип сайта',
    ko: '사이트 로고'
  },
  {
    en: 'Site name',
    es: 'Nombre del sitio',
    fr: 'Nom du site ',
    de: 'Seitenname',
    cn: '站点名称',
    ja: 'サイト名',
    ru: 'Имя сайта',
    ko: '사이트 이름'
  },
  {
    en: 'Site description',
    es: 'Descripción del sitio',
    fr: 'Description du site',
    de: 'Seitenbeschreibung',
    cn: '站点描述',
    ja: 'サイトの説明',
    ru: 'Описание сайта',
    ko: '사이트 설명'
  },
  {
    en: 'Site metadata',
    es: 'Metadatos del sitio',
    fr: 'Métadonnées du site',
    de: 'Seiten-Metadaten',
    cn: '站点元数据',
    ja: 'サイトのメタデータ',
    ru: 'Метаданные сайта',
    ko: '사이트 메타데이터'
  },
  {
    en: 'Site language',
    es: 'Idioma del sitio',
    fr: 'Langue du site',
    de: 'Seitensprache',
    cn: '站点语言',
    ja: 'サイトの言語',
    ru: 'Язык сайта',
    ko: '사이트 언어'
  },
  {
    en: 'Language',
    es: 'Idioma',
    fr: 'La langue',
    de: 'Sprache',
    cn: '语言',
    ja: '言語',
    ru: 'Язык',
    ko: '언어'
  },
  {
    en: 'Back',
    es: 'Atrás',
    fr: 'Dos',
    de: 'Zurück',
    cn: '返回',
    ja: '戻る',
    ru: 'Назад',
    ko: '뒤로'
  },
  {
    en: 'Advert code',
    es: 'Código de anuncio',
    fr: "Code de l'annonce",
    de: 'Anzeigen-Code',
    cn: '广告代码',
    ja: '広告コード',
    ru: 'Рекламный код',
    ko: '광고 코드'
  },
  {
    en: 'Save & launch',
    es: 'Guardar y lanzar',
    fr: 'Enregistrer et lancer',
    de: 'Speichern & starten',
    cn: '保存并启动',
    ja: '保存して起動',
    ru: 'Сохранить и запустить',
    ko: '저장 및 런칭'
  },
  {
    en: 'English',
    es: 'Inglés',
    fr: 'Anglais',
    de: 'Englisch',
    cn: '英语',
    ja: '英語',
    ru: 'Английский',
    ko: '영어'
  },
  {
    en: 'French',
    es: 'Francés',
    fr: 'Français',
    de: 'Französisch',
    cn: '法语',
    ja: 'フランス語',
    ru: 'Французский',
    ko: '프랑스어'
  },
  {
    en: 'Spanish',
    es: 'Español',
    fr: 'Espagnol',
    de: 'Spanisch',
    cn: '西班牙语',
    ja: 'スペイン語',
    ru: 'Испанский',
    ko: '스페인어'
  },
  {
    en: 'German',
    es: 'Alemán',
    fr: 'Deutsch',
    de: 'Deutsch',
    cn: '德语',
    ja: 'ドイツ人',
    ru: 'Немецкий',
    ko: '독일어'
  },
  {
    en: 'Chinese',
    es: 'Chino',
    fr: 'Chinois',
    de: 'Chinesisch',
    cn: '普通话',
    ja: '北京語',
    ru: 'Китайский',
    ko: '중국어'
  },
  {
    en: 'Japanese',
    es: 'Japonés',
    fr: 'Japonais',
    de: 'Japanisch',
    cn: '日本人',
    ja: '日本',
    ru: 'Японский',
    ko: '일본어'
  },
  {
    en: 'Korean',
    es: 'Coreano',
    fr: 'Coréen',
    de: 'Koreanisch',
    cn: '韩国人',
    ja: '韓国語',
    ru: 'Корейский',
    ko: '한국어'
  },
  {
    en: 'Russian',
    es: 'Ruso',
    fr: 'Russe',
    de: 'Russisch',
    cn: '俄语',
    ja: 'ロシア',
    ru: 'Русский',
    ko: '러시아어'
  },
  {
    en: 'en',
    es: 'Inglés',
    fr: 'Anglais',
    de: 'en',
    cn: '英语',
    ja: 'en',
    ru: 'en',
    ko: 'en'
  },
  {
    en: 'fr',
    es: 'Francés',
    fr: 'Français',
    de: 'fr',
    cn: '法语',
    ja: 'fr',
    ru: 'fr',
    ko: 'fr'
  },
  {
    en: 'es',
    es: 'Español',
    fr: 'Espagnol',
    de: 'es',
    cn: '西班牙语',
    ja: 'es',
    ru: 'es',
    ko: 'es'
  },
  {
    en: 'coming soon',
    es: 'muy pronto',
    fr: 'à venir',
    de: 'Demnächst verfügbar',
    cn: '即将推出',
    ja: '近日公開',
    ru: 'скоро',
    ko: '곧 출시 예정'
  },
  {
    en: 'Settings updated successfully',
    es: 'Configuración actualizada con éxito',
    fr: 'Paramètres mis à jour avec succès',
    de: 'Einstellungen erfolgreich aktualisiert',
    cn: '设置更新成功',
    ja: '設定が正常に更新されました',
    ru: 'Настройки успешно обновлены',
    ko: '설정이 성공적으로 업데이트되었습니다.'
  },
  {
    en: 'Error updating settings! Please try again.',
    es: '¡Error al actualizar la configuración! Inténtalo de nuevo.',
    fr: 'Erreur lors de la mise à jour des paramètres ! Veuillez réessayer.',
    de: 'Fehler beim Aktualisieren der Einstellungen! Bitte versuchen Sie es erneut.',
    cn: '更新设置出错！请重试。',
    ja: '設定の更新中にエラーが発生しました。もう一度お試しください。',
    ru: 'Ошибка при обновлении настроек! Пожалуйста, попробуйте снова.',
    ko: '설정 업데이트 오류! 다시 시도해주세요.'
  },
  {
    en: 'Social settings',
    es: 'Ajustes sociales',
    fr: 'Paramètres sociaux',
    de: 'Soziale Einstellungen',
    cn: '社交设置',
    ja: 'ソーシャル設定',
    ru: 'Настройки социальных сетей',
    ko: '소셜 설정'
  },
  {
    en: 'Advert settings',
    es: 'Configuración de anuncio',
    fr: "Paramètres de l'annonce",
    de: 'Anzeigeneinstellungen',
    cn: '广告设置',
    ja: '広告設定',
    ru: 'Настройки рекламы',
    ko: '광고 설정'
  },
  {
    en: "Note: Changing coin values will affect users' current value.",
    es: 'Nota: Cambiar los valores de las monedas afectará el valor actual de los usuarios.',
    fr: 'Remarque : La modification des valeurs des pièces affectera la valeur actuelle des utilisateurs.',
    de: 'Hinweis: Die Änderung der Münzwerte wirkt sich auf den aktuellen Wert der Benutzer aus.',
    cn: '注意：更改硬币值将影响用户的当前值。',
    ja: '注：コインの値を変更すると、ユーザーの現在の値に影響します。',
    ru: 'Примечание: Изменение значения монеты повлияет на текущее значение пользователей.',
    ko: '참고: 코인 값 변경은 사용자의 현재 값을 영향을 미칩니다.'
  },
  {
    en: 'Top',
    es: 'Parte superior',
    fr: 'Haut',
    de: 'Oben',
    cn: '顶部',
    ja: '上部',
    ru: 'Сверху',
    ko: '상단'
  },
  {
    en: 'Left side',
    es: 'Lado izquierdo',
    fr: 'Côté gauche',
    de: 'Linke Seite',
    cn: '左侧',
    ja: '左側',
    ru: 'Слева',
    ko: '왼쪽'
  },
  {
    en: 'Right side',
    es: 'Derecha',
    fr: 'Côté droit',
    de: 'Rechte Seite',
    cn: '右侧',
    ja: '右側',
    ru: 'Справа',
    ko: '오른쪽'
  },
  {
    en: 'Inner',
    es: 'Interior',
    fr: 'Interne',
    de: 'Innen',
    cn: '内部',
    ja: '内側',
    ru: 'Внутри',
    ko: '안쪽'
  },
  {
    en: 'Please provide SMTP host',
    es: 'Por favor proporcione el host SMTP',
    fr: "Veuillez indiquer l'hôte SMTP",
    de: 'Bitte geben Sie den SMTP-Host an',
    cn: '请提供SMTP主机',
    ja: 'SMTPホストを入力してください',
    ru: 'Пожалуйста, укажите SMTP-хост',
    ko: 'SMTP 호스트를 제공해주세요.'
  },
  {
    en: 'Email settings',
    es: 'Ajustes del correo electrónico',
    fr: 'Paramètres de messagerie',
    de: 'E-Mail-Einstellungen',
    cn: '电子邮件设置',
    ja: 'メール設定',
    ru: 'Настройки электронной почты',
    ko: '이메일 설정'
  },
  {
    en: 'Advert Code',
    es: 'Código de anuncio',
    fr: 'Code publicitaire',
    de: 'Anzeigencode',
    cn: '广告代码',
    ja: '広告コード',
    ru: 'Рекламный код',
    ko: '광고 코드'
  },
  {
    en: 'SMTP host',
    es: 'Servidor SMTP',
    fr: 'Hôte SMTP',
    de: 'SMTP-Host',
    cn: 'SMTP主机',
    ja: 'SMTPホスト',
    ru: 'SMTP-хост',
    ko: 'SMTP 호스트'
  },
  {
    en: 'SMTP user/email',
    es: 'Usuario / correo electrónico SMTP',
    fr: 'Utilisateur / email SMTP',
    de: 'SMTP-Benutzer/E-Mail',
    cn: 'SMTP用户/电子邮件',
    ja: 'SMTPユーザー/メール',
    ru: 'SMTP-пользователь/почта',
    ko: 'SMTP 사용자/이메일'
  },
  {
    en: 'SMTP password',
    es: 'Contraseña SMTP',
    fr: 'Mot de passe SMTP',
    de: 'SMTP-Passwort',
    cn: 'SMTP密码',
    ja: 'SMTPパスワード',
    ru: 'SMTP-пароль',
    ko: 'SMTP 비밀번호'
  },
  {
    en: 'Reward settings',
    es: 'Configuración de recompensas',
    fr: 'Paramètres de récompense',
    de: 'Belohnungseinstellungen',
    cn: '奖励设置',
    ja: '報酬の設定',
    ru: 'Настройки вознаграждения',
    ko: '보상 설정'
  },
  {
    en: 'Note: Changing coin values will affect users current value',
    es: 'Nota: El cambio de los valores de las monedas afectará el valor actual de los usuarios',
    fr: 'Remarque: la modification des valeurs des pièces affectera la valeur actuelle des utilisateurs',
    de: 'Hinweis: Die Änderung der Münzwerte wirkt sich auf den aktuellen Wert der Benutzer aus',
    cn: '注意：更改硬币值将影响用户的当前值。',
    ja: '注：コインの値を変更すると、ユーザーの現在の値に影響します。',
    ru: 'Примечание: Изменение значения монеты повлияет на текущее значение пользователей.',
    ko: '참고: 코인 값 변경은 사용자의 현재 값을 영향을 미칩니다.'
  },
  {
    en: 'Login reward',
    es: 'Recogida de sesión',
    fr: 'Récompense de connexion',
    de: 'Belohnung für Anmeldung',
    cn: '登录奖励',
    ja: 'ログイン報酬',
    ru: 'Награда за вход',
    ko: '로그인 보상'
  },
  {
    en: 'Discussion reward',
    es: 'Discusión recompensa',
    fr: 'Récompense de discussion',
    de: 'Belohnung für Diskussionen',
    cn: '讨论奖励',
    ja: 'ディスカッション報酬',
    ru: 'Награда за обсуждение',
    ko: '토론 보상'
  },
  {
    en: 'Comment reward',
    es: 'Comentario Recompensa',
    fr: 'Commentaire récompense',
    de: 'Belohnung für Kommentare',
    cn: '评论奖励',
    ja: 'コメント報酬',
    ru: 'Награда за комментарий',
    ko: '댓글 보상'
  },
  {
    en: 'Best answer reward',
    es: 'Recompensa de mejor respuesta',
    fr: 'Meilleure récompense de réponse ',
    de: 'Belohnung für beste Antwort',
    cn: '最佳答案奖励',
    ja: 'ベストアンサー報酬',
    ru: 'Награда за лучший ответ',
    ko: '최고 답변 보상'
  },
  {
    en: 'Banned words',
    es: 'Palabras prohibidas',
    fr: 'Mots interdits',
    de: 'Gesperrte Wörter',
    cn: '禁用词汇',
    ja: '禁止ワード',
    ru: 'Запрещенные слова',
    ko: '금지된 단어'
  },
  {
    en: 'Sign into your account',
    es: 'Inicie sesión en su cuenta',
    fr: 'Connectez-vous à votre compte',
    de: 'Melden Sie sich in Ihrem Konto an',
    cn: '登录您的帐户',
    ja: 'アカウントにサインイン',
    ru: 'Войдите в свою учетную запись',
    ko: '계정에 로그인'
  },
  {
    en: 'Email or username',
    es: 'Correo electrónico o nombre de usuario',
    fr: "Email ou nom d'utilisateur",
    de: 'E-Mail oder Benutzername',
    cn: '电子邮件或用户名',
    ja: 'メールアドレスまたはユーザー名',
    ru: 'Эл. адрес или имя пользователя',
    ko: '이메일 또는 사용자 이름'
  },
  {
    en: 'Password',
    es: 'Contraseña',
    fr: 'Mot de passe',
    de: 'Passwort',
    cn: '密码',
    ja: 'パスワード',
    ru: 'Пароль',
    ko: '비밀번호'
  },
  {
    en: 'Login',
    es: 'Iniciar',
    fr: 'Se connecter',
    de: 'Anmelden',
    cn: '登录',
    ja: 'ログイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Log In',
    es: 'Iniciar',
    fr: 'Se connecter',
    de: 'Anmelden',
    cn: '登录',
    ja: 'ログイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Forgotten Password?',
    es: '¿Contraseña olvidada?',
    fr: 'Mot de passe oublié?',
    de: 'Passwort vergessen?',
    cn: '忘记密码？',
    ja: 'パスワードをお忘れですか？',
    ru: 'Забыли пароль?',
    ko: '비밀번호를 잊으셨나요?'
  },
  {
    en: 'Reset here',
    es: 'Reiniciar aquí',
    fr: 'Réinitialiser ici',
    de: 'Hier zurücksetzen',
    cn: '在这里重置',
    ja: 'こちらでリセット',
    ru: 'Сбросить здесь',
    ko: '여기에서 초기화'
  },
  {
    en: 'Not a member?',
    es: '¿No eres miembro?',
    fr: 'Pas un membre?',
    de: 'Noch kein Mitglied?',
    cn: '还不是会员？',
    ja: 'メンバーではありませんか？',
    ru: 'Еще не зарегистрированы?',
    ko: '회원이 아니신가요?'
  },
  {
    en: 'Signup',
    es: 'Inscribirse',
    fr: "S'inscrire",
    de: 'Registrieren',
    cn: '注册',
    ja: '新規登録',
    ru: 'Зарегистрироваться',
    ko: '가입'
  },
  {
    en: 'Signup here',
    es: 'Regístrese aquí',
    fr: 'Inscrivez-vous ici ',
    de: 'Hier registrieren',
    cn: '在这里注册',
    ja: 'こちらでサインアップ',
    ru: 'Зарегистрироваться здесь',
    ko: '여기에서 가입'
  },
  {
    en: 'Password retrieval',
    es: 'Recuperación de contraseñas',
    fr: 'Récupération du mot de passe',
    de: 'Passwort-Wiederherstellung',
    cn: '密码找回',
    ja: 'パスワードの取得',
    ru: 'Восстановление пароля',
    ko: '비밀번호 복구'
  },
  {
    en: 'Email address',
    es: 'Dirección de correo electrónico',
    fr: 'Adresse e-mail',
    de: 'E-Mail-Adresse',
    cn: '电子邮件地址',
    ja: 'メールアドレス',
    ru: 'Адрес электронной почты',
    ko: '이메일 주소'
  },
  {
    en: 'Reset password',
    es: 'Restablecer contraseña',
    fr: 'Réinitialiser le mot de passe',
    de: 'Passwort zurücksetzen',
    cn: '重置密码',
    ja: 'パスワードをリセット',
    ru: 'Сброс пароля',
    ko: '비밀번호 초기화'
  },
  {
    en: 'Back to login',
    es: 'Volver a Iniciar sesión',
    fr: 'Retour à la connexion',
    de: 'Zurück zur Anmeldung',
    cn: '返回登录',
    ja: 'ログインに戻る',
    ru: 'Вернуться к входу',
    ko: '로그인으로 돌아가기'
  },
  {
    en: 'Reset your password',
    es: 'Restablezca su contraseña',
    fr: 'réinitialisez votre mot de passe',
    de: 'Passwort zurücksetzen',
    cn: '重置您的密码',
    ja: 'パスワードをリセットしてください',
    ru: 'Сброс пароля',
    ko: '비밀번호를 재설정하세요'
  },
  {
    en: 'Select language',
    es: 'Seleccione el idioma',
    fr: 'Choisir la langue',
    de: 'Sprache auswählen',
    cn: '选择语言',
    ja: '言語を選択してください',
    ru: 'Выберите язык',
    ko: '언어 선택'
  },
  {
    en: 'Continue',
    es: 'Continuar',
    fr: 'Continuer',
    de: 'Weiter',
    cn: '继续',
    ja: '続ける',
    ru: 'Продолжить',
    ko: '계속'
  },
  {
    en: 'Welcome',
    es: 'Bienvenue',
    fr: 'Bienvenue',
    de: 'Willkommen',
    cn: '欢迎',
    ja: 'ようこそ',
    ru: 'Добро пожаловать',
    ko: '환영합니다'
  },
  {
    en: "Welcome, Let's setup blazingly!",
    es: '¡Bienvenido, vamos a configurar deslumbrantemente!',
    fr: 'Bienvenue, installons-nous de manière flamboyante !',
    de: 'Willkommen, lassen Sie uns die Einrichtung starten!',
    cn: '欢迎，让我们快速设置！',
    ja: 'ようこそ、簡単にセットアップしましょう！',
    ru: 'Добро пожаловать! Давайте настроим все настройки!',
    ko: '환영합니다, 빠르게 설정해봅시다!'
  },
  {
    en: 'Enter code sent to your email',
    es: 'Ingrese el código enviado a su correo electrónico',
    fr: 'Entrez le code envoyé à votre e-mail',
    de: 'Geben Sie den an Ihre E-Mail gesendeten Code ein',
    cn: '输入发送到您电子邮件的代码',
    ja: 'メールで送信されたコードを入力してください',
    ru: 'Введите код, отправленный на вашу электронную почту',
    ko: '이메일로 전송된 코드를 입력하세요'
  },
  {
    en: 'New Password',
    es: 'Nueva contraseña',
    fr: 'Nouveau mot de passe',
    de: 'Neues Passwort',
    cn: '新密码',
    ja: '新しいパスワード',
    ru: 'Новый пароль',
    ko: '새 비밀번호'
  },
  {
    en: 'Retype Password',
    es: 'Vuelva a escribir la contraseña',
    fr: 'Retaper le mot de passe',
    de: 'Passwort erneut eingeben',
    cn: '重新输入密码',
    ja: 'パスワードを再入力',
    ru: 'Повторите пароль',
    ko: '비밀번호 재입력'
  },
  {
    en: 'Code is incorrect or expired.',
    es: 'El código es incorrecto o venció.',
    fr: 'Le code est incorrect ou expiré.',
    de: 'Code ist falsch oder abgelaufen.',
    cn: '代码不正确或已过期。',
    ja: 'コードが間違っているか期限が切れています。',
    ru: 'Код неверен или истек срок действия.',
    ko: '코드가 잘못되었거나 만료되었습니다.'
  },
  {
    en: 'Passwords does not matched!',
    es: '¡Las contraseñas no coinciden!',
    fr: 'Les mots de passe ne correspondent pas!',
    de: 'Passwörter stimmen nicht überein!',
    cn: '密码不匹配！',
    ja: 'パスワードが一致しません！',
    ru: 'Пароли не совпадают!',
    ko: '비밀번호가 일치하지 않습니다!'
  },
  {
    en: 'Password reset successfully!',
    es: 'Restablecimiento de contraseña correctamente!',
    fr: 'Réinitialisation du mot de passe avec succès!',
    de: 'Passwort erfolgreich zurückgesetzt!',
    cn: '密码重置成功！',
    ja: 'パスワードのリセットが成功しました！',
    ru: 'Пароль успешно сброшен!',
    ko: '비밀번호가 성공적으로 재설정되었습니다!'
  },
  {
    en: 'Unable to update user. Please try again later.',
    es: 'No se puede actualizar el usuario.  Vuelva a intentarlo más tarde.',
    fr: "Impossible de mettre à jour l'utilisateur. Veuillez réessayer plus tard.",
    de: 'Benutzer konnte nicht aktualisiert werden. Bitte versuchen Sie es später erneut.',
    cn: '无法更新用户。请稍后重试。',
    ja: 'ユーザーの更新に失敗しました。後でもう一度お試しください。',
    ru: 'Не удалось обновить пользователя. Повторите попытку позже.',
    ko: '사용자 업데이트를 할 수 없습니다. 나중에 다시 시도해주세요.'
  },
  {
    en: 'Account created successfully! Please verify account to continue.',
    es: '¡Cuenta creada correctamente! Verifique la cuenta para continuar.',
    fr: 'Compte créé avec succès! Veuillez vérifier le compte pour continuer.',
    de: 'Konto erfolgreich erstellt! Bitte überprüfen Sie Ihr Konto, um fortzufahren.',
    cn: '帐户创建成功！请验证帐户以继续。',
    ja: 'アカウントの作成に成功しました！続行するにはアカウントを確認してください。',
    ru: 'Учетная запись успешно создана! Пожалуйста, подтвердите учетную запись, чтобы продолжить.',
    ko: '계정이 성공적으로 생성되었습니다! 계정을 확인하려면 계속 진행하세요.'
  },
  {
    en: 'Create your account',
    es: 'Crea tu cuenta',
    fr: 'Créez votre compte',
    de: 'Erstellen Sie Ihr Konto',
    cn: '创建您的帐户',
    ja: 'アカウントの作成',
    ru: 'Создайте свою учетную запись',
    ko: '계정 생성하기'
  },
  {
    en: 'Account verification',
    es: 'Verificación de la cuenta',
    fr: 'Vérification de compte',
    de: 'Kontoverifizierung',
    cn: '帐户验证',
    ja: 'アカウントの確認',
    ru: 'Подтверждение учетной записи',
    ko: '계정 확인'
  },
  {
    en: 'Fullname',
    es: 'Nombre completo',
    fr: 'Nom et prénom',
    de: 'Vollständiger Name',
    cn: '全名',
    ja: 'フルネーム',
    ru: 'Полное имя',
    ko: '성명'
  },
  {
    en: 'Username is available.',
    es: 'El nombre de usuario está disponible.',
    fr: "Le nom d'utilisateur est disponible.",
    de: 'Benutzername ist verfügbar.',
    cn: '用户名可用。',
    ja: 'ユーザー名は使用可能です。',
    ru: 'Имя пользователя доступно.',
    ko: '사용자 이름이 사용 가능합니다.'
  },
  {
    en: 'Username is not available. Try another name.',
    es: 'El nombre de usuario no está disponible. Pruebe con otro nombre.',
    fr: "Le nom d'utilisateur n'est pas disponible. Essayez un autre nom.",
    de: 'Benutzername ist nicht verfügbar. Bitte versuchen Sie einen anderen Namen.',
    cn: '用户名不可用。请尝试其他名称。',
    ja: 'ユーザー名は利用できません。別の名前を試してください。',
    ru: 'Имя пользователя недоступно. Попробуйте другое имя.',
    ko: '사용자 이름이 사용 불가능합니다. 다른 이름을 시도하세요.'
  },
  {
    en: 'Have an account?',
    es: '¿Tener una cuenta?',
    fr: 'Avoir un compte?',
    de: 'Sie haben bereits ein Konto?',
    cn: '已有帐户？',
    ja: 'アカウントをお持ちですか？',
    ru: 'Уже есть аккаунт?',
    ko: '계정이 이미 있나요?'
  },
  {
    en: 'Login here',
    es: 'Iniciar sesión aquí',
    fr: 'Connectez-vous ici',
    de: 'Hier anmelden',
    cn: '在这里登录',
    ja: 'こちらでログイン',
    ru: 'Войти здесь',
    ko: '여기에서 로그인'
  },
  {
    en: 'Fullname is too short.',
    es: 'FullName es demasiado corto.',
    fr: 'FullName est trop court.',
    de: 'Vollständiger Name ist zu kurz.',
    cn: '全名太短。',
    ja: 'フルネームが短すぎます。',
    ru: 'Слишком короткое полное имя.',
    ko: '성명이 너무 짧습니다.'
  },
  {
    en: 'Username is too short. Minimum character is three.',
    es: 'El nombre de usuario es demasiado corto. El carácter mínimo es tres.',
    fr: "Le nom d'utilisateur est trop court. Le caractère minimum est de trois.",
    de: 'Benutzername ist zu kurz. Mindestens drei Zeichen erforderlich.',
    cn: '用户名太短。最少三个字符。',
    ja: 'ユーザー名が短すぎます。最小3文字以上を入力してください。',
    ru: 'Имя пользователя слишком короткое. Минимальное количество символов - три.',
    ko: '사용자 이름이 너무 짧습니다. 최소 3자 이상이어야 합니다.'
  },
  {
    en: 'Invalid email address',
    es: 'Dirección de correo electrónico no válida',
    fr: 'Adresse e-mail non valide',
    de: 'Ungültige E-Mail-Adresse',
    cn: '无效的电子邮件地址',
    ja: '無効なメールアドレスです。',
    ru: 'Недопустимый адрес электронной почты',
    ko: '유효하지 않은 이메일 주소입니다.'
  },
  {
    en: 'Password is too short. Minimum character is six.',
    es: 'La contraseña es demasiado corta. El carácter mínimo es seis.',
    fr: 'Le mot de passe est trop court. Le caractère minimum est de six.',
    de: 'Passwort ist zu kurz. Mindestens sechs Zeichen erforderlich.',
    cn: '密码太短。最少六个字符。',
    ja: 'パスワードが短すぎます。最小6文字以上を入力してください。',
    ru: 'Пароль слишком короткий. Минимальное количество символов - шесть.',
    ko: '비밀번호가 너무 짧습니다. 최소 6자 이상이어야 합니다.'
  },
  {
    en: 'Verify your account',
    es: 'Verifique su cuenta',
    fr: 'Vérifiez votre compte',
    de: 'Verifizieren Sie Ihr Konto',
    cn: '验证您的帐户',
    ja: 'アカウントの確認',
    ru: 'Подтвердите свою учетную запись',
    ko: '계정을 확인하세요'
  },
  {
    en: 'Unable to verify user. Please try again later',
    es: 'No se puede verificar el usuario. Vuelva a intentarlo más tarde',
    fr: "Impossible de vérifier l'utilisateur. Veuillez réessayer plus tard",
    de: 'Benutzer konnte nicht verifiziert werden. Bitte versuchen Sie es später erneut.',
    cn: '无法验证用户。请稍后重试。',
    ja: 'ユーザーの確認に失敗しました。後でもう一度お試しください。',
    ru: 'Не удалось подтвердить пользователя. Повторите попытку позже',
    ko: '사용자 확인이 불가능합니다. 나중에 다시 시도해주세요.'
  },
  {
    en: 'Account verified successfully!',
    es: 'Cuenta verificada correctamente!',
    fr: 'Compte vérifié avec succès!',
    de: 'Konto erfolgreich verifiziert!',
    cn: '帐户验证成功！',
    ja: 'アカウントの確認に成功しました！',
    ru: 'Учетная запись успешно подтверждена!',
    ko: '계정이 성공적으로 확인되었습니다!'
  },
  {
    en: 'Type words separate with comma',
    es: 'Escriba palabras separadas con coma',
    fr: 'Tapez des mots séparés par une virgule',
    de: 'Geben Sie Wörter durch Kommas getrennt ein',
    cn: '以逗号分隔单词',
    ja: '単語をカンマで区切って入力してください',
    ru: 'Введите слова, разделенные запятыми',
    ko: '단어를 쉼표로 구분하여 입력하세요'
  },
  {
    en: 'Upload favicon',
    es: 'Subir favicon',
    fr: 'Télécharger le favicon',
    de: 'Favicon hochladen',
    cn: '上传网站图标',
    ja: 'ファビコンをアップロード',
    ru: 'Загрузите иконку сайта',
    ko: '파비콘 업로드'
  },
  {
    en: 'Upload logo',
    es: 'Subir logotipo',
    fr: 'Télécharger le logo',
    de: 'Logo hochladen',
    cn: '上传标志',
    ja: 'ロゴをアップロード',
    ru: 'Загрузите логотип',
    ko: '로고 업로드'
  },
  {
    en: 'Unable to save comment.',
    es: 'Incapaz de guardar el comentario.',
    fr: "Impossible d'enregistrer les commentaires.",
    de: 'Kommentar konnte nicht gespeichert werden.',
    cn: '无法保存评论。',
    ja: 'コメントを保存できませんでした。',
    ru: 'Не удалось сохранить комментарий.',
    ko: '댓글 저장 실패'
  },
  {
    en: 'Error occured. Please try again!',
    es: 'Se produjo un error. ¡Vuelva a intentarlo!',
    fr: "Une erreur s'est produite. Veuillez réessayer!",
    de: 'Fehler aufgetreten. Bitte versuchen Sie es erneut!',
    cn: '错误发生。请重试！',
    ja: 'エラーが発生しました。もう一度お試しください！',
    ru: 'Произошла ошибка. Пожалуйста, повторите попытку!',
    ko: '오류가 발생했습니다. 다시 시도해주세요!'
  },
  {
    en: 'Discussion reported!',
    es: 'Discusión reportada!',
    fr: 'Discussion rapportée !',
    de: 'Diskussion gemeldet!',
    cn: '讨论已举报！',
    ja: 'ディスカッションが報告されました！',
    ru: 'Обсуждение сообщено!',
    ko: '토론이 신고되었습니다!'
  },
  {
    en: 'Reporting....',
    es: 'Informes ....',
    fr: 'Reportage ....',
    de: 'Melden....',
    cn: '正在举报....',
    ja: '報告中....',
    ru: 'Отправка отчета....',
    ko: '신고 중....'
  },
  {
    en: 'Error creating post! Please try again.',
    es: '¡Error al crear la publicación! Vuelva a intentarlo.',
    fr: 'Erreur de création de publication! Veuillez réessayer.',
    de: 'Fehler beim Erstellen des Beitrags! Bitte versuchen Sie es erneut.',
    cn: '错误创建帖子！请重试。',
    ja: '投稿の作成にエラーが発生しました！もう一度お試しください。',
    ru: 'Ошибка создания записи! Пожалуйста, повторитепопытку.',
    ko: '게시물 생성 오류! 다시 시도해주세요.'
  },
  {
    en: 'Title is too short!',
    es: '¡El título es demasiado corto!',
    fr: 'Le titre est trop court!',
    de: 'Der Titel ist zu kurz!',
    cn: '标题太短！',
    ja: 'タイトルが短すぎます！',
    ru: 'Заголовок слишком короткий!',
    ko: '제목이 너무 짧습니다!'
  },
  {
    en: 'Please choose a category!',
    es: '¡Elija una categoría!',
    fr: 'Veuillez choisir une catégorie!',
    de: 'Bitte wählen Sie eine Kategorie!',
    cn: '请选择一个分类！',
    ja: 'カテゴリを選択してください！',
    ru: 'Пожалуйста, выберите категорию!',
    ko: '카테고리를 선택해주세요!'
  },
  {
    en: 'Content is blank.',
    es: 'El contenido está en blanco.',
    fr: 'Le contenu est vide.',
    de: 'Der Inhalt ist leer.',
    cn: '内容为空。',
    ja: 'コンテンツが空白です。',
    ru: 'Содержимое пусто.',
    ko: '내용이 비어 있습니다.'
  },
  {
    en: 'You are required to login to access this page',
    es: 'Debe iniciar sesión para accede a esta página',
    fr: 'Vous devez vous connecter pour accéder à cette page',
    de: 'Sie müssen sich anmelden, um auf diese Seite zuzugreifen.',
    cn: '您需要登录才能访问此页面',
    ja: 'このページにアクセスするにはログインが必要です',
    ru: 'Для доступа к этой странице требуется вход в систему',
    ko: '이 페이지에 접근하려면 로그인이 필요합니다'
  },
  {
    en: 'Sign in',
    es: 'Registrarse',
    fr: 'Signer un signe',
    de: 'Anmelden',
    cn: '登录',
    ja: 'サインイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Sign in to reply',
    fr: 'Se connecter pour répondre',
    es: 'Inicia sesión para responder',
    de: 'Einloggen um zu antworten',
    cn: '登录以回复',
    ja: '返信するにはサインインしてください',
    ko: '답글을 달려면 로그인하세요',
    ru: 'Войдите, чтобы ответить'
  },
  {
    en: 'Security settings',
    fr: 'Paramètres de sécurité',
    es: 'Configuración de seguridad',
    de: 'Sicherheitseinstellungen',
    cn: '安全设置',
    ja: 'セキュリティ設定',
    ko: '보안 설정',
    ru: 'Настройки безопасности'
  },
  {
    en: 'Cloudflare turnstile public key',
    fr: 'Clé publique du tourniquet Cloudflare',
    es: 'Clave pública del torniquete de Cloudflare',
    de: 'Cloudflare-Drehkreuz öffentlicher Schlüssel',
    cn: 'Cloudflare闸机公钥',
    ja: 'Cloudflareターンスタイルの公開鍵',
    ko: 'Cloudflare 회전식 공용 키',
    ru: 'Публичный ключ турникета Cloudflare'
  },
  {
    en: 'Cloudflare turnstile secret key',
    fr: 'Clé secrète du tourniquet Cloudflare',
    es: 'Clave secreta del torniquete de Cloudflare',
    de: 'Geheimer Schlüssel für Cloudflare-Drehkreuz',
    cn: 'Cloudflare闸机密钥',
    ja: 'Cloudflareターンスタイルの秘密キー',
    ko: 'Cloudflare 회전식 보안키',
    ru: 'Секретный ключ турникета Cloudflare'
  }
];

export default dict;
